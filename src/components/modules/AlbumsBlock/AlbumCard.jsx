import React from "react";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../../assets/images/placeholderImg.webp";
import classes from "../../../style/Main.module.css";

const AlbumCard = ({ album }) => {
  const navigate = useNavigate();

  const navigateToAlbum = (albumId) => () => navigate(`/album-page/${albumId}`);

  return (
    <div className={classes.card} onClick={navigateToAlbum(album.id)}>
      <div className={classes.mg_holder}>
        <img src={album.cover_photo ?? placeholderImg} alt="Album Cover" />
      </div>
      <div className={classes.text}>
        <h2>{album.title}</h2>
        <p>{album.release}</p>
      </div>
      <div className={classes.play_icon}>
        <div className={classes.circle}>
          <div className={classes.triangle}></div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
