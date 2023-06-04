import React, { useContext, useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { api } from "../api/api";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
import "../style/AddAlbum.css";
import { Link } from "react-router-dom";

const AddAlbum = () => {
  const { artists: artists2 } = useFeedDataLists();
  const [title, setTitile] = useState("");
  const [descr, setDescr] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    api.getArtists();
  }, []);
  const [form, setForm] = useState({});
  console.log("pidr", form);
  function handleAddAlbum() {
    let newAlbum = new FormData();
    newAlbum.append("title", title);
    newAlbum.append("artist", artist);
    newAlbum.append("description", descr);
    setForm(newAlbum);
    // Call your API function here
    api.addAlbum(newAlbum);
  }
  console.log("title", title);
  console.log("descr", descr);
  console.log("title", title);

  return (
    <>
      <div className="glav_div">
        <img
          id="img1"
          width={300}
          src=" http://localhost:3000/static/media/Spotify_Logo_CMYK_Black.e219951301ddf739fe9e.png"
          alt=""
        />
        <div>
          <h2 className="edit_h4" variant="h4">
            New Album
          </h2>
        </div>
        <div className="div2">
          <h2>Title</h2>
          <input
            className="edit_kar"
            type="text"
            placeholder="title"
            onChange={(e) => {
              setTitile(e.target.value);
            }}
          />
          <h2>description</h2>
          <input
            className="edit_kar"
            type="text"
            placeholder="description"
            onChange={(e) => {
              setDescr(e.target.value);
            }}
          />
          <h2>Artist</h2>
          <select
            name="artist"
            id=""
            onChange={(e) => {
              setArtist(e.target.value);
            }}
          >
            {artists2 ? (
              artists2.map((elem) => (
                <option key={elem.id} value={elem.id}>
                  {elem.full_name}
                </option>
              ))
            ) : (
              <option value="">artist </option>
            )}
          </select>

          <button className="edit_btn" onClick={handleAddAlbum}>
            Add Album
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
