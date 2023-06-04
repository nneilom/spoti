import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import classes from "../style/Main.module.css";
import { useParams } from "react-router-dom";
import downloads from "../style/Artists.module.css";

import { useDownLoad } from "../context/DownloadContexProvider";
import { useAuth } from "../context/AuthContextProvider";
import { usePlayer } from "../context/PlayerContextProvider/PlayerContextProvider";
import { api } from "../api/api";
import TrackList from "../components/modules/TrackList";

const ArtistPage = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();

  const [artistInfo, setArtistInfo] = useState(null);

  const { trackList, setTrackList } = usePlayer();

  useEffect(() => {
    const getArtistTrackListAndSet = async () => {
      const artist = await api.getArtist(id);
      setArtistInfo(artist);
      setTrackList(artist.songs);
    };

    getArtistTrackListAndSet(id);
  }, []);

  // todo ----------------------------------
  const { getFavorites, getDownload } = useDownLoad();
  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);
  // todo ----------------------------------

  return (
    <MainLayout>
      {artistInfo ? (
        <div className={classes.container}>
          <div className={classes.contentWrapper}>
            <div>
              <div className={downloads.download_container}>
                <div className={downloads.TopInfo}>
                  <div className={downloads.TopInfo_Left}>
                    <img src={artistInfo.photo} width={250} alt="" />
                  </div>
                  <div className={downloads.TopInfo_Right}>
                    <h5>Плейлист</h5>
                    <h2>{artistInfo.full_name}</h2>
                    <h5>
                      {" "}
                      User&nbsp; : &nbsp;{currentUser} : Quantity :{" "}
                      {trackList.length}{" "}
                    </h5>
                  </div>
                </div>
                <TrackList trackList={trackList} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </MainLayout>
  );
};

export default ArtistPage;
