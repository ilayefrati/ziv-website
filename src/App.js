import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import AdvantagesPage from "./AdvantagesPage";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* the ScrollToTop component renders initially and gets the path from the getlocation hook.
       afterwards, it initializes the window position to 0,0 at the start and every time the route changes - using the useEffect hook. */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/advantages/:id" element={<AdvantagesPage />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
