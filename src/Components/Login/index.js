import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login shittt.....
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully create a new user with email and password
        console.log(auth);
      })
      .catch((error) => alert(error.message));
    //do some fancy firebase register shittt.....
  };
  return (
    <div className="login-page-container">
      <div className="login">
        <Link to="/">
          <motion.img
            className="login_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            animate={{
              x: [-200, 200, -200],
              scale: [1, 1.7, 1],
              filter: [
                "hue-rotate(0deg)",
                "hue-rotate(120deg)",
                "hue-rotate(240deg)",
                "hue-rotate(360deg)",
              ],
              transition: { duration: 10, repeat: Infinity },
            }}
          />
        </Link>
        <div className="login_container">
          <h1 className="pancakes-text">Sign-In</h1>

          <form>
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <h5> Password</h5>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <br /> <br />
            <button type="submit" onClick={signIn} class="custom-btn btn-12">
              <span>Click!</span>
              <span>Sign-In</span>
            </button>
          </form>
          <p className="login-p">
            By singing-in to agree to the Amzon Fake Clone Conditions of Use &
            Sales. Plese see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <div onClick={register} class="sub-main">
            <button class="button-three">Create your amazon accout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
