import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import album from "../style/AlbumPage.module.css";
import { useDownLoad } from "../context/DownloadContexProvider";
import { useAuth } from "../context/AuthContextProvider";
import { useProducts } from "../context/ProductContextProvider";
import TrackList from "../components/modules/TrackList";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
import { api } from "../api/api";
import classes from "../style/Comment.module.css";

const PlayListPage = ({ trackList }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [textArea, setTextArea] = useState("");
  const [getCommentFromUser, setGetCommentFromUSer] = useState([]);
  const [selectedRating, setSelectedRating] = useState(1);

  const { getFavorites, getDownload } = useDownLoad();

  const { playlists } = useFeedDataLists();

  function addPlaylistComment(e) {
    e.preventDefault();

    const commentForm = new FormData();
    commentForm.append("body", text);
    commentForm.append("playlist", id);
    api.postPlaylistComment(commentForm, setGetCommentFromUSer);
  }

  function addPlaylistRating(e) {
    e.preventDefault();
    const ratingForm = new FormData();
    ratingForm.append("value", selectedRating);
    ratingForm.append("playlist", id);
    api.postRating(ratingForm);
    setGetCommentFromUSer((prevState) => [...prevState, selectedRating]);
  }

  const handleTextAreaChange = (e) => {
    const value = e.target.value;
    setTextArea(value);
    setText(value);
  };

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);

  // todo -------------------
  const { id } = useParams();
  // console.log("Это будет айди ", id);

  useEffect(() => {
    api.getPlayList(id);
    api.getUserCommentFromPlayList(id, setGetCommentFromUSer);
  }, []);

  useEffect(() => {}, []);

  // todo -------------------
  console.log(getCommentFromUser);

  return (
    <MainLayout>
      <div className={album.container}>
        <div className={album.contentWrapper}>
          <div>
            <div className={album.TopInfo}>
              <div className={album.TopInfo_Left}>
                <img src={playlists.cover_photo} width={250} alt="" />
              </div>
              <div className={album.TopInfo_Right}>
                <h5>Плейлист</h5>
                <h2>{playlists.title} </h2>
                <h5>
                  User&nbsp; : &nbsp;{currentUser} : Quantity :
                  {playlists.length}
                </h5>
                <div>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="r-01"
                        name="r"
                        value="1"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onClick={addPlaylistRating}
                        checked={selectedRating === "1"}
                      />
                      <label htmlFor="r-01">★</label>
                      <input
                        type="radio"
                        id="r-02"
                        name="r"
                        value="2"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onClick={addPlaylistRating}
                        checked={selectedRating === "2"}
                      />
                      <label htmlFor="r-02">★</label>
                      <input
                        type="radio"
                        id="r-03"
                        name="r"
                        value="3"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onClick={addPlaylistRating}
                        checked={selectedRating === "3"}
                      />
                      <label htmlFor="r-03">★</label>
                      <input
                        type="radio"
                        id="r-04"
                        name="r"
                        value="4"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onClick={addPlaylistRating}
                        checked={selectedRating === "4"}
                      />
                      <label htmlFor="r-04">★</label>
                      <input
                        type="radio"
                        id="r-05"
                        name="r"
                        value="5"
                        onChange={(e) => setSelectedRating(e.target.value)}
                        onClick={addPlaylistRating}
                        checked={selectedRating === "5"}
                      />
                      <label htmlFor="r-05">★</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TrackList trackList={trackList} />
          </div>
          <div className={classes.wrapperform}>
            <h2 className={classes.commentTitle}>Оставить комментарий</h2>
            <form className={classes.commentForm}>
              <div className={classes.leftForm}>
                <button
                  type="submit"
                  className={classes.commentAdd}
                  onClick={addPlaylistComment}
                >
                  Отправить
                </button>
              </div>
              <div className={classes.rightForm}>
                <textarea
                  className={classes.inputComment}
                  name="comment"
                  id="comment"
                  rows="10"
                  placeholder="Написать комментарий..."
                  value={textArea}
                  onChange={handleTextAreaChange} // Update the event handler
                ></textarea>
              </div>
            </form>
            <div class={classes.wrapperComments}>
              <ul class={classes.commentList}>
                {getCommentFromUser.map((comment) => (
                  <li key={comment.id} class={classes.comment}>
                    {comment.body}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlayListPage;
