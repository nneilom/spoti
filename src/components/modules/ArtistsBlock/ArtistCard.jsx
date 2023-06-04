import React from "react";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../../assets/images/placeholderImg.webp";
import classes from "./ArtistBlock.module.css";

const ArtisCard = ({ artist }) => {
  const navigate = useNavigate();

  const navigateToArtist = (artistId) => () =>
    navigate(`/artist-page/${artistId}`);

  return (
    <div onClick={navigateToArtist(artist.id)} className={classes.cardPreview}>
      <img src={artist.photo ?? placeholderImg} alt="Artist Cover" />
      <p>{artist.full_name}</p>
      <div className={classes.icon_play}>
        <div className={classes.circle_play}>
          <div className={classes.triangle_play}></div>
        </div>
      </div>
    </div>
  );
};

export default ArtisCard;
