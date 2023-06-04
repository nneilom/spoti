import React, { useState } from "react";
import logoSpotify from "../assets/Spotify_Logo_CMYK_Black.png";
import classes from "../style/Login.module.css";
import FormLayout from "../layouts/FormLayout/FormLayout";
import { authContext, useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { resetPassword, loading } = useAuth(authContext);
  const [inpReset, setInpReset] = useState("");
  const navigate = useNavigate();
  console.log(inpReset);

  async function handleSave() {
    await resetPassword(inpReset);
    navigate("/login");
  }
  return (
    <FormLayout>
      <div className={classes.wrapper}>
        <div className={classes.imgBox}>
          <img src={logoSpotify} alt="logo" />
        </div>
        <hr />
        <div className={classes.textBox}>
          <h1>Password Reset</h1>
          <p>
            Enter your <b>Spotify username</b>, or the <b>email address</b> that
            you used to register. We'll send you an email with your username and
            a link to reset your password.
          </p>
        </div>
        <div className={classes.mainForm}>
          <div className={classes.fromP}>
            <p>Email address or username</p>
          </div>
          <input
            type="text"
            placeholder="Enter Email address adress.."
            onChange={(e) => setInpReset(e.target.value)}
          />
          {loading ? (
            <button onClick={handleSave}>Send</button>
          ) : (
            <button className={classes.btnLoad} onClick={handleSave}>
              <div className={classes.wave}>
                <div className={classes.ball}></div>
                <div className={classes.ball}></div>
                <div className={classes.ball}></div>
                <div className={classes.ball}></div>
                <div className={classes.ball}></div>
              </div>
            </button>
          )}
        </div>
        <div className={classes.support}>
          <span>If you still need help, contact Spotify Support</span>
        </div>
      </div>
    </FormLayout>
  );
};

export default ResetPassword;
