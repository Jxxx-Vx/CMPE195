import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUSGS } from "../actions/alerts";
import { getNWS } from "../actions/alerts";
import "./Alerts.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Alerts = () => {
  const [events, setEvents] = useState([]);
  const [events2, setEvents2] = useState([]);
  const [lng, setLng] = useState(-121.8811);
  const [lat, setLat] = useState(37.3352);


  const [location, setLocation] = useState({lat: 37.3352,lng: -121.8811});

  const handleTabClick = async (eventKey) => {
    if (eventKey === "nws") {
      try {
        let res2 = await getNWS(location);
        if (res2.data) {
          setEvents2(res2.data.features);
        }
        console.log(events2);

      } catch (err) {
        console.log(err);
        if (err.response.status === 400) toast.error(err.response.data);
      }
    }
  };

  useEffect(() => {

    async function fetchData() {
      try {
        let res = await getUSGS({lng, lat});
        if (res.data) {
          setEvents(res.data.features);
        }

        let res2 = await getNWS(location);
        if (res2.data) {
          setEvents2(res2.data.features);
        }

      } catch (err) {
        console.log(err);
        if (err.response.status === 400) toast.error(err.response.data);
      }
    }
    fetchData();

  },[lat, lng, location]);
  
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.3352,
    lng: -121.8811,
  };

  const handleMapClick = (event) => {
      setLocation({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });
      setLat(event.latLng.lat());
      setLng(event.latLng.lng());
      console.log("Location: ", lat, ", ",lng)
  };
  
  return (
    <>
      <div className="background">
        <div className="container">
        <h1>Please Select an Area To View Alerts</h1>
        <LoadScript googleMapsApiKey="AIzaSyAI5HmY_9K-OoFSwzjyU2EL0r2H-B_5tIg&callback=initMap&v=weekly">
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onClick={handleMapClick}
            >
              {location && <Marker position={location} />}
          </GoogleMap>
      </LoadScript>

        <Tabs defaultActiveKey="usgs" onSelect={handleTabClick} className="mb-5 tabs">
          <Tab eventKey="usgs" title="USGS">
                <div className="row">
                  {events.map((event) => (
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
                  {events2.map((event) => (
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
