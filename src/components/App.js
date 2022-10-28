import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

const App = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SongList />
      <SongDetail />
    </div>
  );
};

export default App;
