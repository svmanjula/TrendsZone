import { Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import HomePage from "../pages/HomePage/HomePage";
import Loginpage from "../pages/LoginPage/LoginPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import Signuppage from "../pages/SignupPage/SignupPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import Wishlistpage from "../pages/WishlistPage/WishlistPage";
import ProtectedRoute from "./ProtectedRoute";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlistpage />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:productId" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
