import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";

const Playadd = () => {
  const { title, setTitle, description, setDescription, postPlaylist } =
    useProducts();

  const [coverPhoto, setCoverPhoto] = useState(null);

  function addPlayList(e) {
    e.preventDefault();
    const playlistForm = new FormData();
    playlistForm.append("title", title);
    playlistForm.append("description", description);
    if (coverPhoto) {
      playlistForm.append("cover_photo", coverPhoto);
    }
    postPlaylist(playlistForm);
  }

  return (
    <div>
      <form encType="multipart/form-data">
        <input
          placeholder="title"
          value={title}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={description}
          placeholder="description"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          placeholder="photo"
          type="file"
          onChange={(e) => {
            setCoverPhoto(e.target.files[0]);
          }}
        />
        <button onClick={addPlayList}>add</button>
      </form>
    </div>
  );
};

export default Playadd;
