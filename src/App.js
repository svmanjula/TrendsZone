import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/loginpage" element={<Loginpage/>} />
        <Route path="/signuppage" element={<Signuppage />} />


       
      </Routes>
    </div>
  );
}

export default App;
