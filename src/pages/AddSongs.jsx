import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import "../style/AddSongs.css";
import { api } from "../api/api";
import { Link } from "react-router-dom";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
const AddSongs = () => {
  const { addProduct, artist, getArtist, getAlbums, albums } = useProducts();
  const { albums: albums2 } = useFeedDataLists();

  const [album, setAlbum] = useState(0);
  // const [artists, setArtists] = useState(0);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [genre, setGenre] = useState("");

  function handleAdd() {
    const newSong = new FormData();
    newSong.append("title", title);
    if (file) {
      newSong.append("audio_file", file);
    }
    newSong.append("album", album);
    newSong.append("genre", genre);
    // newSong.append("artist", artists);
    console.log(newSong);
    addProduct(newSong);
  }
  useEffect(() => {
    api.getArtist();
  }, []);
  useEffect(() => {
    api.getAlbums();
  }, []);

  return (
    <>
      <div>
        <div className="glav_div">
          <img
            id="img1"
            width={300}
            src=" http://localhost:3000/static/media/Spotify_Logo_CMYK_Black.e219951301ddf739fe9e.png"
            alt=""
          />
          <div>
            <h2 className="edit_h4" variant="h4">
              New Song
            </h2>
          </div>

          <div className="div2">
            <h2>File</h2>
            <input
              className="edit_kar"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              placeholder="song"
              variant="outlined"
              size="small"
              name="audio_file"
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <h2>Genre</h2>
            <input
              className="edit_kar"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              placeholder="genre"
              variant="outlined"
              size="small"
              name="genre"
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
            <h2>Title</h2>
            <input
              className="edit_kar"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              placeholder="title"
              variant="outlined"
              size="small"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <h2>Album</h2>

          <select
            name="album"
            id=""
            onChange={(e) => {
              setAlbum(e.target.value);
            }}
          >
            {albums2 ? (
              albums2.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {elem.title}
                </option>
              ))
            ) : (
              <option value="">album </option>
            )}
          </select>
          <div>
            <Link to={"/"}>
              <button
                className="edit_btn"
                onClick={handleAdd}
                variant="outlined"
              >
                New song
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSongs;
