import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./TrackRow.module.css";
import play_btn from "../../../assets/Play.svg";
import undownload from "../../../assets/UN_Line=empty, Name=download.svg";
import download from "../../../assets/Line=empty, Name=download.svg";
import unlike_song from "../../../assets/unlike _song_icon.svg";
import like_song from "../../../assets/like_song_icon.svg";
import { usePlayer } from "../../../context/PlayerContextProvider/PlayerContextProvider";
import { useFeedDataLists } from "../../../context/FeedContextProvider/FeedContextProvider";
import { useDownLoad } from "../../../context/DownloadContexProvider";

const TrackRow = ({
  trackIndex,
  track,
  // AddFavorites,
  handleOpenAddtoPlaylistModal,
}) => {
  const { id: trackId, cover_photo, title, artist } = track;

  const {} = useFeedDataLists();

  const { setCurrentTrackIndex } = usePlayer();

  const navigate = useNavigate();

  const artistTitle = artist[1];
  const { AddDownload, downloads, AddFavorites, checkTracksDown } =
    useDownLoad();

  const isFavorite = (trackId) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));

    if (favorites) {
      let isTrackFavorite = favorites.tracks.filter(
        (track) => track.id == trackId
      )?.length;
      return isTrackFavorite;
    }
  };

  return (
    <div className={classes.track_line}>
      <div
        onClick={() => {
          setCurrentTrackIndex(trackIndex);
        }}
      >
        {" "}
        <img src={play_btn} alt="" />
      </div>
      <div className={classes.track_line_section}>
        <img src={cover_photo} width={48} alt="" />
        <div className={classes.track_line_section_name}>
          <h4> {title} </h4>
          <h5> {artistTitle} </h5>
        </div>
      </div>
      <div className={classes.classes}>{"Album Title"}</div>
      {/* <div className={classes.dateAdd}>1 day ago</div> */}
      <div
        className={classes.time}
        onClick={() => {
          AddDownload(track);
        }}
      >
        {checkTracksDown(trackId) ? (
          <img src={undownload} alt="" />
        ) : (
          <img src={download} alt="" />
        )}
      </div>
      <div
        className={classes.favorites}
        onClick={() => {
          AddFavorites(track);
        }}
      >
        {isFavorite(trackId) ? (
          <img src={unlike_song} alt="" />
        ) : (
          <img src={like_song} alt="" />
        )}
      </div>
      <button
        className={classes.add}
        onClick={() => handleOpenAddtoPlaylistModal(trackId)}
      >
        Add to playlist
      </button>
      <button
        style={{ width: "30px" }}
        onClick={() => navigate(`/editTrack/${trackId}`)}
      >
        edit
      </button>
    </div>
  );
};

export default TrackRow;
