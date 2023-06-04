import React, { useReducer, useContext, createContext } from "react";
import { SET_TRACKLIST, SET_CURRENT_TRACK_INDEX } from "./actions";

export const PlayerContext = createContext();
export const usePlayer = () => useContext(PlayerContext);

const initialState = {
  trackList: [],
  currentTrackIndex: null,
  currentTrack: null,
};

const playerReducer = (state, action) => {
  switch (action.type) {
    case SET_TRACKLIST:
      return {
        ...state,
        trackList: [...action.payload],
      };
    case SET_CURRENT_TRACK_INDEX:
      return {
        ...state,
        currentTrackIndex: action.payload,
        currentTrack: state.trackList[action.payload] ?? null,
      };
    default:
      return state;
  }
};

const PlayerContextProvider = ({ children }) => {
  const [playerState, dispatch] = useReducer(playerReducer, initialState);

  const { trackList, currentTrackIndex, currentTrack } = playerState;
  // console.log("trackList: player", trackList);

  const setTrackList = (trackList) => {
    dispatch({ type: SET_TRACKLIST, payload: trackList });
  };

  const setCurrentTrackIndex = (trackIndex) => {
    dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: trackIndex });
  };

  const playerNextTrack = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % trackList.length);
  };

  const playerPrevTrack = () => {
    setCurrentTrackIndex(
      (currentTrackIndex - 1 + trackList.length) % trackList.length
    );
  };

  const providerValues = {
    trackList,
    currentTrack,
    setCurrentTrackIndex,
    setTrackList,
    playerNextTrack,
    playerPrevTrack,
  };

  return (
    <PlayerContext.Provider value={providerValues}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
