import React from "react";
import classes from "../style/Main.module.css";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const PlaylistComponent = () => {
  const { setPlaylistAdd, playlistAdd } = useProducts();
  const navigate = useNavigate();
  console.log(playlistAdd);

  return (
    <div className={classes.playlistBox}>
      {playlistAdd.map((item) => (
        <div
          className={classes.playlist}
          key={item.id}
          onClick={() => navigate(`/playlist-page${item.id}`)}
        >
          <div className={classes.card}>
            <div className={classes.mg_holder}>
              <img src={item.cover_photo} alt="image" />
            </div>
            <div className={classes.text}>
              <h2>{item.title}</h2>
              <p>{item.release}</p>
            </div>
            <div className={classes.play_icon}>
              <div className={classes.circle}>
                <div className={classes.triangle}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistComponent;
