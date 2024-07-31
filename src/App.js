import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import AdvantagesPage from './AdvantagesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/about/advantages/:id" element={<AdvantagesPage />} />
        <Route path="/contact" element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;