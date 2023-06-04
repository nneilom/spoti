import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { api } from "../../../api/api";
import { successToaster } from "../../../helpers/toasters";
import { useFeedDataLists } from "../../../context/FeedContextProvider/FeedContextProvider";

import classes from "./CreatePalylistModal.module.css";

export default function CreatePalylistModal({ isOpen, handleClose }) {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    cover: null,
  });

  const { addCreatedPlaylist } = useFeedDataLists();

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { title, description, cover } = formState;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("cover_photo", cover);

      const playlist = await api.addPlaylist(formData);

      addCreatedPlaylist(playlist);
      successToaster("Playlist successfully added!");
      handleClose();
    } catch (error) {
      console.log("Add Playlist Error: ", error);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        classes: { root: classes.modal },
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            name="title"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleInputChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            name="description"
            type="text"
            multiline
            rows={3}
            fullWidth
            variant="outlined"
            onChange={handleInputChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            label="Select Cover"
            name="cover"
            type="file"
            fullWidth
            variant="standard"
            onChange={handleFileChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
