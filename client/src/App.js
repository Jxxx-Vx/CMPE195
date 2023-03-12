// import those pages in App.js
// then based on the path show each components using react-router components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./components/TopNav";
// components
import Home from "./Pages/Home";
import Alerts from "./Pages/Alerts";
import Login from "./auth/Login";
import Register from "./auth/Register";

/**
 * Lets create TopNavigation/menu bar so that we can easily TopNavigate between pages
 * lets write it in App.js before we move it to its own component
 */

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/alerts" component={Alerts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
