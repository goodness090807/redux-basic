import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "想見你", duration: "4:05" },
    { title: "掉了", duration: "1:05" },
    { title: "青花瓷", duration: "3:20" },
    { title: "聽媽媽的話", duration: "2:38" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
