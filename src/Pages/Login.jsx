import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../Config/firebase";
import { AuthContext } from "../Config/auth";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        navigate("/");
      } catch (error) {
        alert(error);
      }
    },
    [navigate]
  );

  if (currentUser) {
    navigate("/");
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email"/>
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password"/>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
