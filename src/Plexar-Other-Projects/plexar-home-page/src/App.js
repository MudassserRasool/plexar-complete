import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NewsLatter from "./components/NewsLatter/NewsLatter";
import Footer from "./components/Footer/Footer";
import ReadMoreButtonsPages from "./components/ReadMoreButtonsPages/ReadMoreButtonsPages";


const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ReadMoreButtonsPages />} path="/learn-more-clindex/:id" />
          </Routes>
      </BrowserRouter>
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default App;
