import React from "react";
import playBtn from "../../../../assets/Play.svg";
import pauseBtn from "../../../../assets/Pause.svg";
import prevSong from "../../../../assets/prevSong.svg";
import nextSong from "../../../../assets/nextSong.svg";
import playerblock from "../../../../style/Player.module.css";

const PlayerControllers = ({
  isPlaying,
  handlePlayPause,
  playerNextTrack,
  playerPrevTrack,
}) => {
  return (
    <div>
      <button className={playerblock.playButton} onClick={playerPrevTrack}>
        <img src={prevSong} alt="Prev Icon" />
      </button>
      <button className={playerblock.playButton_1} onClick={handlePlayPause}>
        {isPlaying ? (
          <img src={pauseBtn} alt="Pause Icon" />
        ) : (
          <img src={playBtn} alt="Play Icon" />
        )}
      </button>
      <button className={playerblock.playButton} onClick={playerNextTrack}>
        <img src={nextSong} alt="Next Icon" />
      </button>
    </div>
  );
};

export default PlayerControllers;
