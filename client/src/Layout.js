import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";


const Layout = () => {
  
  return (
    <div className="App">
      <Header title="Digital Planner" />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
