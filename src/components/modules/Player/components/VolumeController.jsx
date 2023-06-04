import React from "react";
import fullScreen from "../../../../assets/Full Screen.svg";
import volumeImg from "../../../../assets/valume.svg";
import playerblock from "../../../../style/Player.module.css";

const VolumeController = ({ volume, handleVolumeChange }) => {
  return (
    <div className={playerblock.rightLineSong}>
      <img src={volumeImg} alt="" />

      <input
        type="range"
        id="volume"
        name="volume"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={handleVolumeChange}
      />
      <img src={fullScreen} alt="" />
    </div>
  );
};

export default VolumeController;
