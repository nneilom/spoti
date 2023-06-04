import React, { useContext, useEffect } from "react";
import classes from "../style/Download.module.css";
import play from "../assets/Play.svg";
import download from "../assets/Line=empty, Name=download.svg";
import search from "../assets/Line=bold, Name=search.svg";
import drop from "../assets/fi-ss-caret-down.svg";
import song from "../assets/Rectangle 236.svg";
import delete_icon from "../assets/Delete_icon.svg";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { useDownLoad } from "../context/DownloadContexProvider";
import { songsContext } from "../context/SongsContextProvider";
import { useAuth } from "../context/AuthContextProvider";
import { usePlayer } from "../context/PlayerContextProvider/PlayerContextProvider";

const Download = () => {
  const { currentUser } = useAuth();
  const { setCurrentTrack } = useContext(songsContext);
  const { setCurrentTrackIndex } = usePlayer();
  // ! downloads
  const { getDownload, downloads, deleteTrack } = useDownLoad();
  console.log(downloads);

  useEffect(() => {
    getDownload();
  }, []);
  // !downloads
  return (
    <MainLayout>
      <div className={classes.download_container}>
        <div className={classes.TopInfo}>
          <div className={classes.TopInfo_Left}>
            <img src={download} alt="" />
          </div>
          <div className={classes.TopInfo_Right}>
            <h5>Плейлист</h5>
            <h2>Download</h2>
            <h5>
              {" "}
              User&nbsp; : &nbsp;{currentUser} : Quantity :
              {downloads.tracks.length}
            </h5>
          </div>
        </div>
        <div className={classes.track_block}>
          <div className={classes.track_props}>
            <div className={classes.track_props_left}>
              <img src={play} alt="" />
              {/* <img src={download} alt="" /> */}
            </div>
            <div className={classes.track_props_right}>
              <img src={search} alt="" style={{ width: "25px" }} />
              <span>Дата добавления </span>
              <img src={drop} alt="" />
            </div>
          </div>
          <div className={classes.track_line_head}>
            <div className={classes.container_grid}>
              <div className={classes.number}>
                <h4>#</h4>
              </div>
              <div>
                <h4>Name</h4>
              </div>
              <div>
                <h4>Album</h4>
              </div>
              <div>
                <h4>Time</h4>
              </div>
              <div>
                <h4>Date publick</h4>
              </div>

              <div>
                <h4>Delete</h4>
              </div>
            </div>
            {download
              ? downloads.tracks.map((elem, index) => {
                  return (
                    <div className={classes.track_line} key={elem.id}>
                      <div>
                        {" "}
                        <img
                          src={play}
                          alt=""
                          onClick={() => {
                            setCurrentTrackIndex(index);
                          }}
                        />
                      </div>
                      <div className={classes.track_line_section}>
                        <img src={elem.cover_photo} width={48} alt="" />
                        <div className={classes.track_line_section_name}>
                          <h4> {elem.title} </h4>
                          <h5> {elem.artist[0]} </h5>
                        </div>
                      </div>
                      <div>SOS</div>
                      {/* <div>1 day ago</div> */}
                      <div>3:22</div>
                      <div>
                        <h4>1 day ago</h4>
                      </div>
                      <div
                        onClick={() => {
                          deleteTrack(elem.id);
                        }}
                      >
                        <img src={delete_icon} alt="" />
                      </div>
                    </div>
                  );
                })
              : null}
            {/* <div className={classes.track_line}>
              <div>
                {" "}
                <img src={play} alt="" />
              </div>
              <div className={classes.track_line_section}>
                <img src={song} alt="" />
                <div className={classes.track_line_section_name}>
                  <h4> Kill Bill </h4>
                  <h5> SZA </h5>
                </div>
              </div>
              <div>SOS</div>
          
              <div>3:22</div>
              <div>
                <h4>1 day ago</h4>
              </div>
              <div>
                <img src={delete_icon} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Download;
