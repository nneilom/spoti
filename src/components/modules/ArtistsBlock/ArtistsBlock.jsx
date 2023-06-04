import React from "react";
import classes from "./ArtistBlock.module.css";
import ArtisCard from "./ArtistCard";

const ArtistsBlock = ({ artists }) => {
  return (
    <div className={classes.artistBlock}>
      {artists.map((artist) => (
        <ArtisCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistsBlock;
