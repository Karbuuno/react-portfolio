import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function NotFound() {
  return <h1>Not Found Page 404</h1>;
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        {/* <Route path='/react-portfolio-app' element={<About />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
