
import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/LoginPage";
import Signuppage from "./pages/SignupPage";
import CheckoutPage from "./pages/CheckoutPage";
import Wishlistpage from "./pages/WishlistPage";
import MainRouter from "./routes/Router";


function App() {
  return (
    <div className="App">
      <MainRouter/>
    </div>
  );
}

export default App;
