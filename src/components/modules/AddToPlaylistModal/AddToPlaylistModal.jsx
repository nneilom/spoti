import * as React from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFeedDataLists } from "../../../context/FeedContextProvider/FeedContextProvider";

export default function AddToPlaylistModal({ isOpen, handleClose, playlists }) {
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add To Playlist</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel>Playlists</InputLabel>
          <Select value={playlists[0].id} label="Playlists">
            {playlists.map((playlist) => (
              <MenuItem key={playlist.id} value={playlist.id}>
                {playlist.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
