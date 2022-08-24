import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Products from "./components/pages/Products/Products";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Category from "./components/pages/category/Category";
import Product from "./components/pages/Products/Product";
import Article from "./components/pages/Article/Article";
import { ThemeContext } from "./components/ThemeContext/ThemeContext.jsx";
import React, { useContext } from "react";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "App1" : "App"}>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>

        <Route path={"/category/:val"} element={<Category />}></Route>
        <Route path={"/products"} element={<Products />}></Route>
        <Route path={"/product/:i"} element={<Product />}></Route>
        <Route path={"/article/:id"} element={<Article />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
