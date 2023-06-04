import { useRef, useState } from "react";
import playerblock from "../../../style/Player.module.css";

import ReactPlayer from "react-player";
import { usePlayer } from "../../../context/PlayerContextProvider/PlayerContextProvider";
import SongInfo from "./components/SongInfo";
import PlayerControllers from "./components/PlayerControllers";
import TimeLineController from "./components/TimeLineController";
import VolumeController from "./components/VolumeController";

export default function Player() {
  const { currentTrack, trackList, playerNextTrack, playerPrevTrack } =
    usePlayer();

  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const tracks = trackList;

  console.log("currentTrack:", currentTrack);
  console.log("tracks:", tracks);

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleProgress = (progress) => {
    setPlayedSeconds(progress.playedSeconds);
  };

  const handleSeek = (seconds) => {
    playerRef.current.seekTo(seconds);
  };

  return currentTrack ? (
    <div className={playerblock.component}>
      <SongInfo currentTrack={currentTrack} />

      <div className={playerblock.songLine}>
        <ReactPlayer
          height={0}
          ref={playerRef}
          // url={
          //   tracks.length !== 0
          //     ? currentTrack.audio_file
          //     : "http://34.125.87.211/media/songs/Linkin_Park_-_Bleed_It_Out_pPDQK7N.mp3"
          // }
          url={currentTrack.audio_file}
          playing={isPlaying}
          volume={volume}
          onEnded={playerNextTrack}
          onDuration={handleDuration}
          onProgress={handleProgress}
        />

        <PlayerControllers
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          playerPrevTrack={playerPrevTrack}
          playerNextTrack={playerNextTrack}
        />

        {/* TimeLine */}
        <TimeLineController
          playedSeconds={playedSeconds}
          duration={duration}
          handleSeek={handleSeek}
        />
      </div>

      <VolumeController
        volume={volume}
        handleVolumeChange={handleVolumeChange}
      />

      {/* volume */}
    </div>
  ) : null;
}
