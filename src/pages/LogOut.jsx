import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const LogOut = () => {
  const { handleLogout, checkAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  return (
    <div>
      <button onClick={handleLogout}>logout </button>
    </div>
  );
};

export default LogOut;
