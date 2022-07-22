import React from "react";
import "./styles/App.module.scss";
import "./styles/components/home/EmojiBullet/_main.scss";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
