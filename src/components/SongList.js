import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

const SongList = ({ songs, selectedSong }) => {
  const renderSongs = songs.map((song) => {
    return (
      <div key={song.title} style={{ display: "flex" }}>
        <label style={{ flexBasis: "120px" }}>{song.title}</label>
        <button
          onClick={() => {
            selectedSong(song);
          }}>
          選取
        </button>
      </div>
    );
  });

  return <div style={{ flexBasis: "50%" }}>{renderSongs}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectedSong,
})(SongList);
