import React from "react";

import RealState from "./RealState/RealState";
import About from "./RealState/About";
import Login from "./RealState/Login";
import Signup from "./RealState/Signup";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RealState />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
