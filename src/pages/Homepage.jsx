import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { useFeedDataLists } from "../context/FeedContextProvider/FeedContextProvider";
import ArtistsBlock from "../components/modules/ArtistsBlock";
import AlbumsBlock from "../components/modules/AlbumsBlock";
import classes from "../style/Main.module.css";

const Homepage = () => {
  // const { getDownload, getFavorites } = useDownLoad();
  // useEffect(() => {
  //   getDownload();
  // }, []);
  // useEffect(() => {
  //   getFavorites();
  // }, []);

  const { artists, albums, playlists } = useFeedDataLists();

  const [greeting, setGreeting] = useState("");

  // !Великий код
  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting = "";
    if (currentHour < 12) {
      newGreeting = "Good morining";
    } else if (currentHour < 18) {
      newGreeting = "Good evening";
    } else {
      newGreeting = "Good night";
    }
    setGreeting(newGreeting);
  }, []);

  return (
    <MainLayout>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <h2>{greeting}</h2>
          <ArtistsBlock artists={artists} />
          <div className={classes.ablumsSection}>
            <h2>Made for you</h2>
          </div>
          <AlbumsBlock albums={albums} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
