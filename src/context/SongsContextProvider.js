import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "./AuthContextProvider";

export const songsContext = createContext();
export const useSong = () => useContext(songsContext);
export const API_SONGS = "http://34.125.252.214/songs/";
export const API_ALBUMS = "http://34.125.87.211";

const SongContextProvider = ({ children }) => {
  const [trackInfo, setTrackInfo] = useState({});
  const [trackList, setTrackList] = useState([]);

  const [Counter, setCounter] = useState(3);
  const [AlbumInfo, setAlbumInfo] = useState({});
  const [artistSongs, setArtistSongs] = useState([]);
  const [artistInfo, setArtistInfo] = useState([]);

  // todo - получение данных по id
  async function getALbumTrack(id) {
    try {
      let res = await axios.get(`${API_ALBUMS}/albums/${id}/`);
      // console.log(res.data);
      setTrackList(res.data.songs);
      setAlbumInfo(res.data);
      setTrackInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // todo - получение данных по id
  const values = {
    Counter,
    setCounter,
    trackInfo,
    trackList,
    setTrackList,
    getALbumTrack,
    artistSongs,
    AlbumInfo,
    artistInfo,
  };

  // console.log("trackInfo: ", trackInfo);
  // console.log("trackList: ", trackList);
  // console.log("Counter: ", Counter);

  // console.log("AlbumInfo: ", AlbumInfo);
  // console.log("artistSongs: ", artistSongs);
  // console.log("artistInfo:", artistInfo);

  return (
    <songsContext.Provider value={values}>{children}</songsContext.Provider>
  );
};

export default SongContextProvider;
