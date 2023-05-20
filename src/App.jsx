import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Info from "./pages/info";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
