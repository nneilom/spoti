import React, { useReducer, useContext, createContext } from "react";
import { SET_PLAYLISTS } from "./actions";

export const PlaylistsContext = createContext();
export const usePlaylists = () => useContext(PlaylistsContext);

const initialState = {
  playlists: [],
};

const playlistsReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: [...action.payload],
      };

    default:
      return state;
  }
};

const PlaylistsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playlistsReducer, initialState);

  const setPlaylists = (playlists) => {
    dispatch({
      type: SET_PLAYLISTS,
      payload: playlists,
    });
  };

  const values = {
    playlists: state.playlists,
    setPlaylists,
  };

  return (
    <PlaylistsContext.Provider value={values}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export default PlaylistsContextProvider;
