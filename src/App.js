import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
import lenis from "./utils/lenis.js";
import link from "./utils/link.js";

const App = () => {
  useEffect(() => {
    lenis();
    link();
}, []);

  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeView />} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;
