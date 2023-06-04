import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumPage from "../pages/AlbumPage";
import ArtistPage from "../pages/ArtistPage";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PlayList from "../pages/PlayList";
import Download from "../pages/Downloand";
import ResetPassword from "../pages/ResetPassword";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import SearchPage from "../pages/SearchPage";
import { useAuth } from "../context/AuthContextProvider";
import Feed from "../pages/Feed";
import AddArtist from "../pages/AddArtist";
import AddAlbum from "../pages/AddAlbum";
import AddSongs from "../pages/AddSongs";
import EditTrackPage from "../pages/EditTrackPage";
import PlayListPage from "../pages/PlayListPage";

const MainRoute = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={currentUser ? <Feed /> : <Homepage />} />
        <Route path="/album-page/:id" element={<AlbumPage />} />
        <Route path="/artist-page/:id" element={<ArtistPage />} />
        <Route path="/playlist-page/:id" element={<PlayListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/download" element={<Download />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addart" element={<AddArtist />} />
        <Route path="/addalbum" element={<AddAlbum />} />
        <Route path="/addsong" element={<AddSongs />} />
        <Route path="/editTrack/:id" element={<EditTrackPage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
