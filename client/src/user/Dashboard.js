import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Account</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
