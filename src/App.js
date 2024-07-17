import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/about" element={<Main/>}></Route>
        <Route path="/contact" element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;