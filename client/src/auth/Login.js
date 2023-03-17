import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import "../style/LoginSignup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA", { username, password });
    try {
      let res = await login({ username, password });

      if (res.data) {
        console.log(
          "SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===> "
        );
        // console.log(res.data);
        // save user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        // save user and token to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        toast.success("Login Successful");
        history.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <MDBContainer fluid className = "logincontainer">
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
          <MDBCard className='cardbody  text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
            <p className="text-white-50 mb-5">Please enter your login and password!</p>
            <form onSubmit={handleSubmit}>
              <h5>Username</h5>
              <MDBInput
                className = "username-textbox" 
                labelClass='text-white' 
                label='Username' 
                id='formControlLg' 
                type='text' 
                size="lg"
                placeholder= "Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <h5>Password</h5>
              <MDBInput 
                className = "password-textbox" 
                
                labelClass='text-white' 
                label='Password' 
                id='formControlLg' 
                type='password' 
                size="lg"
                placeholder= "Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <MDBBtn outline className='mx-2 px-5' size='lg'>
              Login
            </MDBBtn>
            <br/>
            <br/>
            
            <div>
              <p className="mb-5 text-black-50">Don't have an account? <a href="http://localhost:3000/register" class="text-dark-50 fw-bold">Sign Up</a></p>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    </MDBContainer>
    </>
  );
};

export default Login;




