import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import AdvantagesPage from "./AdvantagesPage";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Contact";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // First, load the content
    setTimeout(() => {
      setContentReady(true);
    }, 2000);

    // Then, after content is ready, show it for additional 4 seconds
    if (contentReady) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [contentReady]);

  if (loading) {
    return <Loader />;
  }

  return (
    <HashRouter basename="/">
      <ScrollToTop />
      {/* the ScrollToTop component renders initially and gets the path from the getlocation hook.
       afterwards, it initializes the window position to 0,0 at the start and every time the route changes - using the useEffect hook. */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/advantages/:id" element={<AdvantagesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
