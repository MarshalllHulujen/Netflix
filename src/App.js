import "./App.css";
import { Header2 } from "./component/Header2";

import { Header1 } from "./component/Header1";
import { Video } from "./component/Videos/Video1";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div id="unrg">
      <Header1 />
      <Video />
    </div>
  );
}

export default App;
