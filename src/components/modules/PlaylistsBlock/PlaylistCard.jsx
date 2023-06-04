import React from "react";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../../assets/images/placeholderImg.webp";
import classes from "../../../style/Main.module.css";

const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();

  const navigateToPlaylist = (playlistId) => () =>
    navigate(`/playlist-page/${playlistId}`);

  return (
    <div className={classes.card} onClick={navigateToPlaylist(playlist.id)}>
      <div className={classes.mg_holder}>
        <img
          src={playlist.cover_photo ?? placeholderImg}
          alt="Playlist Cover"
        />
      </div>
      <div className={classes.text}>
        <h2>{playlist.title}</h2>
        <p>{playlist.release}</p>
      </div>
      <div className={classes.play_icon}>
        <div className={classes.circle}>
          <div className={classes.triangle}></div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
