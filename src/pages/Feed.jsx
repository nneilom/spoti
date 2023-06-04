import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import FreshBlood from "../components/FreshBlood";
import playlist from "../style/PalyListBlock.module.css";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
import AlbumsBlock from "../components/modules/AlbumsBlock";
import ArtistsBlock from "../components/modules/ArtistsBlock";
import PlaylistsBlock from "../components/modules/PlaylistsBlock";

const Feed = () => {
  const { id } = useParams();

  const { artists, albums, playlists } = useFeedDataLists();

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting = "";
    if (currentHour < 12) {
      newGreeting = `Good morining USER`;
    } else if (currentHour < 18) {
      newGreeting = `Good evening  User`;
    } else {
      newGreeting = `Good night`;
    }
    setGreeting(newGreeting);
  }, []);

  return (
    <MainLayout>
      <div className={playlist.rightPart}>
        <div className={classes.contentWrapper}>
          <FreshBlood />
          <h2>{greeting}</h2>
          <ArtistsBlock artists={artists} />
          <div className={classes.ablumsSection}>
            <h2>Made for you</h2>
          </div>
          <AlbumsBlock albums={albums} />
          <div className={classes.ablumsSection}>
            <h2>Made by you</h2>
          </div>
          {/* <PlaylistComponent /> */}
          <PlaylistsBlock playlists={playlists} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Feed;
