import React from "react";
import classes from "../../../style/Main.module.css";
import PlaylistCard from "./PlaylistCard";

const PlaylistsBlock = ({ playlists }) => {
  return (
    <div className={classes.playlistBox}>
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default PlaylistsBlock;
