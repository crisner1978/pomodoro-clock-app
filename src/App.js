// import { useState, useEffect } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";

function App() {

  return (
    <div className="App">
      <div className="timers">
        <Break />
        <Session />
      </div>
      <Timer />
    </div>
  );
}

export default App;
