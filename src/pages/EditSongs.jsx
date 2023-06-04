import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
import "../style/EditSongs.css";
import { api } from "../api/api";

const EditSongs = () => {
  const { saveEditedProduct, productDetails, getProductDetails } =
    useProducts();
  const [product, setProduct] = useState(productDetails);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [song, setSong] = useState(null);

  const { albums } = useFeedDataLists();

  const { id } = useParams();

  useEffect(() => {
    api.getAlbums();
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
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
              Edit Song
            </h2>
          </div>
          <div className="div2">
            <input
              className="edit_kar1"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              label="title"
              variant="outlined"
              size="small"
              name="image"
              onChange={handleInp}
              value={product.title || ""}
            />

            <select name="artist" id="" onChange={handleInp}>
              {albums ? (
                albums.map((elem) => (
                  <option key={elem.id} value={elem.id}>
                    {elem.title}
                  </option>
                ))
              ) : (
                <option value="">artist </option>
              )}
            </select>

            <input
              className="edit_opi1"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              label="genre"
              variant="outlined"
              size="small"
              name="description"
              onChange={handleInp}
              // value={product.genre || ""}
            />
            <input
              type="file"
              className="edit_opi1"
              sx={{ marginBottom: "10px" }}
              id="outlined-basic"
              label="genre"
              variant="outlined"
              size="small"
              name="description"
              onChange={handleInp}
              // value={product.audio_file || ""}
            />

            <button
              className="edit_btn1"
              onClick={() => saveEditedProduct(product, id)}
              variant="outlined"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSongs;
