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

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
      <h1 style={{color: "white", fontWeight: "bold", fontSize: "48px"}}>Alerts</h1>
      </div>

      <div className="container">
            <button onClick={() => handleTabClick(0)}>USGS</button>
            <button onClick={() => handleTabClick(1)}>NWS</button>
        <div className="row">
           
          {/* <div className="col-md-6 offset-md-3">
            <button onClick={handleSubmit1}>USGS</button>
          </div> */}
        </div>
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
