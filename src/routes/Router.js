import { Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import HomePage from "../pages/HomePage/HomePage";
import Loginpage from "../pages/LoginPage/LoginPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import Signuppage from "../pages/SignupPage/SignupPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import Wishlistpage from "../pages/WishlistPage/WishlistPage";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/wishlist" element={<Wishlistpage />} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
