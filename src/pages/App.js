import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import AdvantagesPage from "./AdvantagesPage";
import ScrollToTop from "../components/ScrollToTop";
import Contact from "./Contact";
import Loader from "../components/Loader";

// Component to handle loading state inside Router
function AppContent() {
  const [loading, setLoading] = useState(true);
  const [mainPageLoaded, setMainPageLoaded] = useState(false);
  const location = useLocation();

  // Handle when the main page (with 3D model) is loaded
  const handleMainPageLoaded = () => {
    setMainPageLoaded(true);
    // Add a minimum loading time to ensure a smooth experience
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // If user navigates directly to non-main page, skip loading
  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "") {
      setLoading(false);
    }
  }, [location.pathname]);

  // Fallback timeout to prevent infinite loading
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "") {
      const fallbackTimer = setTimeout(() => {
        setLoading(false);
      }, 8000); // 8 second fallback for slower devices

      return () => clearTimeout(fallbackTimer);
    }
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main onPageLoaded={handleMainPageLoaded} />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/advantages/:id" element={<AdvantagesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HashRouter basename="/">
      <AppContent />
    </HashRouter>
  );
}

export default App;
