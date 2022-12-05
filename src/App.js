import "./App.css";

import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";
import CheckoutPage from "./Pages/CheckoutPage";
import Wishlistpage from "./Pages/Wishlistpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/wishlist" element={<Wishlistpage />} />


      </Routes>
    </div>
  );
}

export default App;
