import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>請選擇歌曲</div>;
  }
  return (
    <div style={{ flexBasis: "50%" }}>
      {song.title} {song.duration}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
