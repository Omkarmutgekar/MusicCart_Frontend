import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "./redux/Slices/UiSlice";
import { ToastContainer, Zoom } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/OrderSucces/Success";
import AddNewProduct from "./pages/AddNewProduct/AddNewProduct";
import Invoice from "../src/Components/Invoice/Invoice";
import { Footer, ProductView } from "./Components/index";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const { isMobileDevice } = useSelector((state) => state.ui);

  useEffect(() => {
    const handleWindowResize = () => {
      dispatch(setIsMobile(window.innerWidth <= 520));
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer
        transition={Zoom}
        position="top-center"
        autoClose={3000}
      />
      <Routes>
        <Route path="/add-product" element={<AddNewProduct />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
{/*           <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<Success />} />
        {/* <Route path="/invoice-card" element={<InvoiceCard/>} /> */}
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
      {!isMobileDevice && <Footer />}
    </Router>
  );
};

export default App;
