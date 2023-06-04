import React, { useEffect, useReducer, useContext, createContext } from "react";
import {
  ADD_PLAYLIST,
  SET_ALBUMS,
  SET_ARTISTS,
  SET_GENRES,
  SET_PLAYLISTS,
} from "./actions";
import { api } from "../../api/api";

export const FeedContext = createContext();
export const useFeedDataLists = () => useContext(FeedContext);

const initialState = {
  artists: [],
  albums: [],
  playlists: [],
  genres: [],
};

const feedReducer = (state, action) => {
  switch (action.type) {
    case SET_ARTISTS:
      return {
        ...state,
        artists: [...action.payload],
      };
    case SET_ALBUMS:
      return {
        ...state,
        albums: [...action.payload],
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: [...action.payload],
      };
    case SET_GENRES:
      return {
        ...state,
        genres: [...action.payload],
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlists, action.payload],
      };
    default:
      return state;
  }
};

const FeedContextProvider = ({ children }) => {
  const [feedState, dispatch] = useReducer(feedReducer, initialState);

  const { artists, albums, playlists, genres } = feedState;

  const addCreatedPlaylist = (playlist) => {
    dispatch({
      type: ADD_PLAYLIST,
      payload: playlist,
    });
  };

  const values = {
    artists,
    albums,
    playlists,
    genres,
    addCreatedPlaylist,
  };

  useEffect(() => {
    const getFeedDataListsAndSet = async () => {
      const artists = await api.getArtists();
      const albums = await api.getAlbums();
      const playlists = await api.getPlaylists();
      const genres = await api.getGenres();

      dispatch({
        type: SET_ARTISTS,
        payload: Array.isArray(artists) ? artists : [],
      });
      dispatch({
        type: SET_ALBUMS,
        payload: Array.isArray(albums) ? albums : [],
      });
      dispatch({
        type: SET_PLAYLISTS,
        payload: Array.isArray(playlists) ? playlists : [],
      });
      dispatch({
        type: SET_GENRES,
        payload: Array.isArray(genres) ? genres : [],
      });
    };

    getFeedDataListsAndSet();
  }, []);

  return <FeedContext.Provider value={values}>{children}</FeedContext.Provider>;
};

export default FeedContextProvider;
