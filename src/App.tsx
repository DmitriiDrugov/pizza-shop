import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import NotFoundPage from "./components/pages/NotFoundPage.tsx";
import FullPizza from "./components/pages/FullPizza.tsx";
import Cart from "./components/pages/Cart.tsx";
import "./scss/app.scss";
import MainLayout from "./layouts/MainLayaout.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
