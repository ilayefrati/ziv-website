import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainFirstPage from "./MainFirstPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFirstPage/>}></Route>
        <Route path="/about" element={<MainFirstPage/>}></Route>
        <Route path="/contact" element={<MainFirstPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;