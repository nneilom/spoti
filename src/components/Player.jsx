import { useRef, useState } from "react";
import playerblock from "../style/Player.module.css";
import playBtn from "../assets/Play.svg";
import pauseBtn from "../assets/Pause.svg";
import prevSong from "../assets/prevSong.svg";
import nextSong from "../assets/nextSong.svg";
import fullScreen from "../assets/Full Screen.svg";
import valume from "../assets/valume.svg";
import ReactPlayer from "react-player";
import { usePlayer } from "../context/PlayerContextProvider/PlayerContextProvider";

export default function Player() {
  const { currentTrack, trackList, playerNextTrack, playerPrevTrack } =
    usePlayer();

  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const tracks = trackList;

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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // !------------------------------
  return currentTrack ? (
    <div className={playerblock.component}>
      <div className={playerblock.songInfo}>
        <img
          className={playerblock.musicCover}
          src={
            tracks ? currentTrack.cover_photo : "https://picsum.photos/200/200"
          }
        />
        <div>
          <h3 className="title">{currentTrack.title}</h3>
          <p className="subTitle">{currentTrack.artist.title}</p>
        </div>
      </div>

      <div className={playerblock.songLine}>
        <ReactPlayer
          height={0}
          ref={playerRef}
          url={
            tracks.length != 0
              ? currentTrack.audio_file
              : "http://34.125.87.211/media/songs/Linkin_Park_-_Bleed_It_Out_pPDQK7N.mp3"
          }
          playing={isPlaying}
          volume={volume}
          onEnded={playerNextTrack}
          onDuration={handleDuration}
          onProgress={handleProgress}
        />
        <div>
          <button className={playerblock.playButton} onClick={playerPrevTrack}>
            <img src={prevSong} alt="" />
          </button>
          <button
            className={playerblock.playButton_1}
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <img src={pauseBtn} alt="" />
            ) : (
              <img src={playBtn} alt="" />
            )}
          </button>
          <button className={playerblock.playButton} onClick={playerNextTrack}>
            <img src={nextSong} alt="" />
          </button>
        </div>

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
            <p>
              {/* {time.min}:{time.sec} */}
              {formatTime(duration)}
            </p>
          </div>
        </div>
      </div>
      <div className={playerblock.rightLineSong}>
        <img src={valume} alt="" />

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
    </div>
  ) : null;
}
