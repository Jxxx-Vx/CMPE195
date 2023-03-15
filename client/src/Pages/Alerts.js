import { toast } from "react-toastify";
import { getUSGS } from "../actions/alerts";
import { getNWS } from "../actions/alerts";


const Alerts = () => {

  const handleSubmit1 = async () => {
    try {
      let res = await getUSGS();
      if(res.data){
        console.log(res.data);
      }

    } catch (err) {
      console.log(err);
      if (err.response.status === 400) 
        toast.error(err.response.data);
    }
  };

  const handleSubmit2 = async () => {
    try {
      let res = await getNWS();
      if(res.data){
        console.log(res.data);
      }

    } catch (err) {
      console.log(err);
      if (err.response.status === 400) 
        toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Alerts</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <button onClick={handleSubmit1}>USGS</button>
            <button onClick={handleSubmit2}>NWS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alerts;
