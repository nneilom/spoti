import React from "react";
import playerblock from "../../../../style/Player.module.css";

const SongInfo = ({ currentTrack }) => {
  const {
    title,
    artist: { title: artistTitle },
    cover_photo,
  } = currentTrack;
  return (
    <div className={playerblock.songInfo}>
      <img
        className={playerblock.musicCover}
        src={cover_photo ?? "https://picsum.photos/200/200"}
      />
      <div>
        <h3 className="title">{title}</h3>
        <p className="subTitle">{artistTitle}</p>
      </div>
    </div>
  );
};

export default SongInfo;
