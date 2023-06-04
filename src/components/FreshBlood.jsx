import React from "react";
import img from "../assets/freshBlood.png";
import classes from "../style/FreshBlood.module.css";

const FreshBlood = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src={img}
        alt=""
        style={{ maxWidth: "200px" }}
      />
      <div className="artist_header" style={{ marginleft: "50px" }}>
        <img src="https://icons8.com/icon/98A4yZTt9abw/verified-badge" alt="" />

        <h2>WHYTDAN</h2>
      </div>
    </div>
  );
};

export default FreshBlood;
