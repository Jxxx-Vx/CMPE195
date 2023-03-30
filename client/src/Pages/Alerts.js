import { useState } from "react";
import { toast } from "react-toastify";
import { getUSGS } from "../actions/alerts";
import "./Alerts.css";

const Alerts = () => {
  const [events, setEvents] = useState([]);

  const handleSubmit1 = async () => {
    try {
      let res = await getUSGS();
      if (res.data) {
        setEvents(res.data.features);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
      <h1 style={{color: "white", fontWeight: "bold", fontSize: "48px"}}>Alerts</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <button onClick={handleSubmit1}>USGS</button>
          </div>
        </div>
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
                    {event.properties.type}: M{event.properties.mag}
                  </p>
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
