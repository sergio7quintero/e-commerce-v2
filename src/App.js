import "./App.css";
import "./index.css";
// import { useEffect, useState } from "react";
// import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Products from "./components/Products/products";
import Home from "./components/Home/home";
import Header from "./components/Header/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Products />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
