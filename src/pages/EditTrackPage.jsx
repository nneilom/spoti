import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
import "../style/EditSongs.css";
import { successToaster } from "../helpers/toasters";

const EditTrackPage = () => {
  const [formState, setFormState] = useState({
    album: "",
    title: "",
    genre: "",
  });

  const { albums, genres } = useFeedDataLists();

  const { id: trackId } = useParams();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    const getTrackAndSet = async () => {
      const track = await api.getTrack(trackId);

      console.log("track:", track);

      setFormState({
        album: track.album.id,
        title: track.title,
        genre: track.genre.slug,
      });
    };

    getTrackAndSet();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formState,
        album: +formState.album,
      };
      await api.editTrack(trackId, payload);
      successToaster(`Track edited succesfully!`);
      navigate("/");
    } catch (error) {
      console.log("Edit Track Page Submit Error: ", error);
    }
  };

  return (
    <form className="glav_div" onSubmit={handleSubmit}>
      <img
        id="img1"
        width={300}
        src="http://localhost:3000/static/media/Spotify_Logo_CMYK_Black.e219951301ddf739fe9e.png"
        alt=""
      />
      <div>
        <h2 className="edit_h4" variant="h4">
          Edit Song
        </h2>
      </div>

      <div className="div2">
        <h2>Title</h2>
        <input
          className="edit_kar"
          sx={{ marginBottom: "10px" }}
          id="outlined-basic"
          placeholder="title"
          variant="outlined"
          size="small"
          name="title"
          value={formState.title}
          onChange={handleInputChange}
          required
        />
        <h2>{genres && genres.length ? "Genres" : "Genres Loading..."}</h2>

        <select
          name="genre"
          value={formState.genre}
          onChange={handleInputChange}
        >
          {genres.length ? (
            genres.map((genre) => (
              <option key={genre.slug} value={genre.slug}>
                {genre.name}
              </option>
            ))
          ) : (
            <option disabled>Genres Loading...</option>
          )}
        </select>

        <h2>{albums && albums.length ? "Albums" : "Albums Loading..."}</h2>

        <select
          name="album"
          value={formState.album}
          onChange={handleInputChange}
        >
          {albums && albums.length ? (
            albums.map((album) => (
              <option key={album.id} value={album.id}>
                {album.title}
              </option>
            ))
          ) : (
            <option disabled>Albums Loading...</option>
          )}
        </select>
      </div>

      <div>
        <button className="edit_btn" variant="outlined">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditTrackPage;
