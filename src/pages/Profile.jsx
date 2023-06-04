import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {
    changePassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
  } = useAuth();

  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}></div>
      </div>
    </MainLayout>
  );
};

export default Profile;
