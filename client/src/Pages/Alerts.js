import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUSGS } from "../actions/alerts";
import { getNWS } from "../actions/alerts";
import "./Alerts.css";

const Alerts = () => {
  const [events, setEvents] = useState([]);
  const [events2, setEvents2] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [area, setArea] = useState(["CA"]);

  const handleTabClick = async (index) => {
    setActiveTab(index);
    if (index == 1) 
    {
        try {
            let res2 = await getNWS({"area":area});
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

  useEffect( async() => {
    try {
      let res = await getUSGS();
      if (res.data) {
        setEvents(res.data.features);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  },[]);

  const handleAreaChange = (event) => {
    const selectedArea = event.target.value;
    setArea([selectedArea]);};

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
      <h1 style={{color: "white", fontWeight: "bold", fontSize: "48px"}}>Alerts</h1>
      </div>

      <div className="container">
            <button onClick={() => handleTabClick(0)}>USGS</button>
            <button onClick={() => handleTabClick(1)}>NWS</button>
        <br></br><div className="row">
        {activeTab === 1 && (
            <div>
            <label htmlFor="area">Choose an area:</label>
            <select id="area" value={area} onChange={handleAreaChange}>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="NY">New York</option>
                <option value="PA">Pennsylvania</option>
                <option value="IL">Illinois</option>
                <option value="OH">Ohio</option>
                <option value="GA">Georgia</option>
                <option value="NC">North Carolina</option>
                <option value="MI">Michigan</option>
                <option value="NJ">New Jersey</option>
            </select>
            </div>
        )}
        </div> <br></br>
        <div className="row">
          {activeTab === 0 && events.map((event) => (
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
                    {event.properties.type}: M{event.properties.mag}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {activeTab === 1 && events2.map((event) => (
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
      </div>
    </>
  );
};

export default Alerts;
