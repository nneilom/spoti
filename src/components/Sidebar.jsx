import React, { useEffect, useState } from "react";
import sidebars from "../style/SideBar.module.css";
import home from "../assets/Line=bold, Name=home.svg";
import search_i from "../assets/Line=bold, Name=search.svg";
import library from "../assets/Line=bold, Name=library.svg";
import plus from "../assets/Line=empty, Name=plus.svg";
import right from "../assets/Line=empty, Name=right-arrow.svg";
import drop from "../assets/fi-ss-caret-down.svg";
import prev from "../assets/Rectangle 236.svg";
import { useNavigate } from "react-router-dom";
import { downloadContext } from "../context/DownloadContexProvider";

const Sidebar = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link);
  };

  return (
    <div className={sidebars.container}>
      <div className={sidebars.container_top}>
        <div className={sidebars.container_top_in}>
          <div
            onClick={() => handleLinkClick("/")}
            className={activeLink === "home" ? sidebars.activeLink : ""}
            style={{ color: activeLink === "home" ? "white" : "" }}
          >
            <img src={home} alt="" />
            <h3>Home</h3>
          </div>
          <div
            onClick={() => {
              navigate("/search");
            }}
          >
            <img src={search_i} alt="" />
            <h3>Search</h3>
          </div>
        </div>
      </div>
      <div className={sidebars.container_bottom}>
        <div className={sidebars.container_bottom_nav}>
          <div>
            <img src={library} alt="" />
            <h3>My library</h3>
          </div>
          <div>
            <img src={plus} alt="" />
            <img src={right} alt="" />
          </div>
        </div>
        <div className={sidebars.playList}>
          <h3>Playlist</h3>
        </div>
        <div className={sidebars.filter_line}>
          <img src={search_i} alt="" />
          <div>
            <h3>Added</h3>
            <img src={drop} alt="" />
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/playlist");
          }}
          className={sidebars.playList_line}
        >
          <img src={prev} alt="" />
          <div>
            <h3>Liked Track</h3>
            <h4>Playlist:</h4>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/download");
          }}
          className={sidebars.playList_line}
        >
          <img src={prev} alt="" />
          <div>
            <h3>Download</h3>
            <h4>Downloaded: </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
