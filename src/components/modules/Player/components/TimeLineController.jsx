import React from "react";
import playerblock from "../../../../style/Player.module.css";

const TimeLineController = ({ playedSeconds, duration, handleSeek }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={playerblock.songTimeLine}>
      <div className={playerblock.time}>
        <p>
          {/* {currTime.min}:{currTime.sec} */}
          {formatTime(playedSeconds)}
        </p>
      </div>

      <input
        className={playerblock.linetime}
        type="range"
        min={0}
        max={duration}
        step={0.1}
        value={playedSeconds}
        onChange={(e) => handleSeek(parseFloat(e.target.value))}
      />
      <div>
        <p>{formatTime(duration)}</p>
      </div>
    </div>
  );
};

export default TimeLineController;
