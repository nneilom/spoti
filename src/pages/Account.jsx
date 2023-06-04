import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import logoSpotify from "../assets/Spotify_Logo_CMYK_Black.png";
import change from "../style/Login.module.css";
import FormLayout from "../layouts/FormLayout/FormLayout";

const Account = () => {
  const {
    changePassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
    currentPassword,
    newPassword,
    confirmPassword,
    refreshToken,
    loading,
  } = useAuth();

  const navigate = useNavigate();

  async function handleChangePassword() {
    try {
      await refreshToken();
      await changePassword();
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormLayout>
      <div className={change.wrapper}>
        <div className={change.imgBox}>
          <img src={logoSpotify} alt="logo" />
        </div>
        <hr />
        <div className={change.textBox}>
          <h1>Change password</h1>
        </div>
        <div className={change.mainForm}>
          <div className={change.fromP}>
            <p>Current password</p>
          </div>
          <div className={change.inpurblock}>
            <input
              type="text"
              placeholder="current "
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <div className={change.fromP}>
              <p>New password</p>
            </div>
            <div className={change.inpurblock}>
              <input
                type="text"
                placeholder="new"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className={change.fromP}>
                <p>New current password</p>
              </div>
              <div className={change.inpurblock}>
                <input
                  type="text"
                  placeholder="confirm "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {loading ? (
                  <button onClick={handleChangePassword}>Save</button>
                ) : (
                  <button
                    className={change.btnLoad}
                    onClick={handleChangePassword}
                  >
                    <div className={change.wave}>
                      <div className={change.ball}></div>
                      <div className={change.ball}></div>
                      <div className={change.ball}></div>
                      <div className={change.ball}></div>
                      <div className={change.ball}></div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default Account;
