import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { getUSGS } from "../actions/alerts";
import { getNWS } from "../actions/alerts";
import "./Alerts.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import SearchBar from "./SearchBar";

const stateConverter = require('us-state-converter');

const Alerts = () => {
  const [events, setEvents] = useState([]);
  const [events2, setEvents2] = useState([]);
  const [lng, setLng] = useState(-121.8811);
  const [lat, setLat] = useState(37.3352);
  const [location, setLocation] = useState({lat: 37.3352,lng: -121.8811});
  const [area, setArea] = useState(["CA"]);
 
  useEffect(() => {
  },[lng, lat, area]);
  
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  const handleMapClick = (event) => {
      setLocation({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });
      setLat(event.latLng.lat());
      setLng(event.latLng.lng());
      async function changeArea (){
      Geocode.setApiKey("AIzaSyAI5HmY_9K-OoFSwzjyU2EL0r2H-B_5tIg&callback=initMap&v=weekly");
        await Geocode.fromLatLng(lat, lng).then(
          (response) => {
            const address = response.results[0].formatted_address;
            let city, state, country;
            for (let i = 0; i < response.results[0].address_components.length; i++) {
              for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                switch (response.results[0].address_components[i].types[j]) {
                  case "locality":
                    city = response.results[0].address_components[i].long_name;
                    break;
                  case "administrative_area_level_1":
                    state = response.results[0].address_components[i].long_name;
                    break;
                  case "country":
                    country = response.results[0].address_components[i].long_name;
                    break;
                }
              }
            }
            console.log(city, state, country);
            console.log(address);
            setArea([stateConverter.abbr(state)]);
          },
          (error) => {
            console.error(error);
          }
        );
      }
      changeArea();
      async function fetchData() {
        try {
          let res = await getUSGS({lng, lat});
          if (res.data) {
            setEvents(res.data.features);
          }
          else {
            setEvents([]);
          }
  
          let res2 = await getNWS({"area":area});
          if (res2.data) {
            setEvents2(res2.data.features);
          }
          else {
            setEvents2([]);
          }
  
          console.log('State: ', area);
          console.log("Location: ", lat, ", ",lng)
  
        } catch (err) {
          console.log(err);
          if (err.response.status === 400) toast.error(err.response.data);
        }
      }
      fetchData();
  };

  const panTo = useCallback(({ lat, lng }) => {
    setLat(lat);
    setLng(lng);
    setLocation({
      lat: lat,
      lng: lng
    });
  },[]);

  return (
    <>
      <div className="background">
        <div className="container">
        <h1>Please Select an Area To View Alerts</h1>
        <LoadScript googleMapsApiKey="AIzaSyAI5HmY_9K-OoFSwzjyU2EL0r2H-B_5tIg&callback=initMap&v=weekly&libraries=places">
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onClick={handleMapClick}
          >
              {location && <Marker position={location} />}
          </GoogleMap>
        <SearchBar panTo={panTo}/>
      </LoadScript>

        <Tabs defaultActiveKey="usgs" className="mb-5 tabs">
          <Tab eventKey="usgs" title="USGS">
                <div className="row">
                  {events && events.map((event) => (
                    <div className="col-md-4" key={event.id}>
                      <div className="card mb-4">
                        <div className="card-header">
                          <h5 className="card-title">{event.properties.place}</h5>
                        </div>
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">
                            {new Date(event.properties.time).toLocaleString()}
                          </h6>
                          <p className="card-text">
                            {event.properties.type.charAt(0).toUpperCase() + event.properties.type.slice(1)}: M{event.properties.mag}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </Tab>
            <Tab eventKey="nws" title="NWS">
              <div className="row">
                  {events2 && events2.map((event) => (
                    <div className="col-md-4" key={event.id}>
                      <div className="card mb-4">
                        <div className="card-header">
                          <h5 className="card-title">{event.properties.senderName}</h5>
                        </div>
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">
                            {event.properties.headline}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
            </Tab>
          </Tabs>
        </div>  
      </div>
    </>
  );
};

export default Alerts;
