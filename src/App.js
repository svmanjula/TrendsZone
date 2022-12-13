import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />

        <Route path="productpage" element={<ProductPage/>} />
      </Routes>
    </div>
  );
}

export default App;
