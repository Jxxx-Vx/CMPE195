import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { toast } from "react-toastify";
import { register } from "../actions/auth";
import "../style/LoginSignup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      });
      console.log("REGISTER USER ===> ", res);
      toast.success("Register success. Please login.");
      history.push("/login");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <MDBContainer fluid className="logincontainer">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="cardbody  text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Registration</h2>
                <p className="text-black-50 mb-1">
                  To create an account user most provide: 
                </p>
                <p className="text-black-50 mb-3">
                  Username, Email, and Password
                </p>
                <form onSubmit={handleSubmit}>
                  <h5>Username</h5>
                  <MDBInput
                    className="name-textbox"
                    labelClass="text-white"
                    label="name"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <h5>Email</h5>
                  <MDBInput
                    className="email-textbox"
                    labelClass="text-white"
                    label="Email"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <h5>Password</h5>
                  <MDBInput
                    className="password-textbox"
                    labelClass="text-white"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="d-flex justify-content-center align-items-center">
                    <MDBBtn outline className="mx-2 px-5 btn btn-primary" size="lg" disabled={!name || !password}>
                      Register
                    </MDBBtn>
                  </div>
                </form>

                <br />
                <br />
                <div>
                  <p className="mb-5 text-black-50">
                    Already have an account?{" "}
                    <a
                      href="http://localhost:3000/login"
                      class="text-dark-50 fw-bold"
                    >
                      Log-in
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Register;

