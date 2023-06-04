import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import albumClasses from "../style/AlbumPage.module.css";

import { useDownLoad } from "../context/DownloadContexProvider";
import { useProducts } from "../context/ProductContextProvider";
import Modal from "react-modal";
import { usePlayer } from "../context/PlayerContextProvider/PlayerContextProvider";
import { api } from "../api/api";
import TrackList from "../components/modules/TrackList";
Modal.setAppElement("#root");

const AlbumPage = () => {
  const [albumInfo, setAlbumInfo] = useState(null);
  const { trackList, setTrackList } = usePlayer();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const { getFavorites, getDownload } = useDownLoad();

  //! For modaalwindow
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIconClick = () => {
    if (isModalOpen) {
      closeModal();
    } else {
      openModal();
    }
  };

  const handleOutsideClick = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    },
    [modalRef, closeModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, handleOutsideClick]);

  useEffect(() => {
    getFavorites();
  }, []);
  useEffect(() => {
    getDownload();
  }, []);

  // const { trackList, setTrackList } = usePlayer();

  // todo -------------------
  const { id } = useParams();
  // console.log("Это будет айди ", id);

  useEffect(() => {
    const getAlbumAndSet = async () => {
      const album = await api.getALbum(id);
      setAlbumInfo(album);
      setTrackList(album.songs);
    };

    getAlbumAndSet(id);
  }, []);

  // todo -------------------

  console.log("trackList:", trackList);
  console.log("albumInfo: ", albumInfo);

  return (
    <MainLayout>
      {albumInfo ? (
        <div className={albumClasses.container}>
          <div className={albumClasses.contentWrapper}>
            <div>
              <div className={albumClasses.TopInfo}>
                <div className={albumClasses.TopInfo_Left}>
                  <img src={albumInfo.cover_photo} width={250} alt="" />
                </div>
                <div className={albumClasses.TopInfo_Right}>
                  <h5>Плейлист</h5>
                  <h2>{albumInfo.title} </h2>
                  <h5>Quantity :{trackList.length}</h5>
                </div>
              </div>
              {/* tracklist */}
              <TrackList albumInfo={albumInfo} trackList={trackList} />
              <div></div>
            </div>
          </div>
        </div>
      ) : null}
    </MainLayout>
  );
};

export default AlbumPage;
