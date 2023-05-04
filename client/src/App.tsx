import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ListBeats from "./pages/beats/components/listBeats";
import CreateBeat from "./pages/admin/components/beats/createBeat";

function App() {
  return (
    <>
      <ListBeats />
    </>
  );
}

export default App;
