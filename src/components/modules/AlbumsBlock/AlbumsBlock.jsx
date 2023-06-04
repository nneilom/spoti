import React from "react";
import classes from "../../../style/Main.module.css";
import AlbumCard from "./AlbumCard";

const AlbumsBlock = ({ albums }) => {
  return (
    <div className={classes.playlistBox}>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumsBlock;
