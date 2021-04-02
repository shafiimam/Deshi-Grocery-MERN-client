import React, { useState, useContext, useRef } from "react";
import { Button, Container} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";
import { UserContext } from "../../App";
import {
  googleSIgnIn,
  initiateLoginFramework,
  fbSignIn,
  createAccountWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./loginManager";
import { useHistory, useLocation } from "react-router";
import firebase from "firebase"

// Messages
const required = "This field is required";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

const Login = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const [newUser, setNewUser] = useState(false);
  const [loogedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  initiateLoginFramework();
  handleSubmit();
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };
  const handleGoogleSignIn = () => {
    googleSIgnIn().then((res) => {
      handleResponse(res, true);
      storeAuthToken()
    });
    
  };
 

  const storeAuthToken = () => {
    firebase
    .auth()
    .currentUser.getIdToken(true)
    .then(function (idToken) {
      sessionStorage.setItem("token", idToken);
      history.replace(from);
    })
    .catch(function (error) {
      // Handle error
    });
  }

  return (
    <Container>
      <h2>Please log in first</h2>
      <div className="app-authentication my-5">
        <div className="google">
          <Button className="app-btn d-flex align-items-center justify-content-between my-5" onClick={handleGoogleSignIn} variant="info w-100">
            <i className="fab fa-lg fa-google"></i>Continue with google
          </Button>
        </div>
        </div>
    </Container>
  );
};

export default Login;
