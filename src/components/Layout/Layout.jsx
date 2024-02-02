import React from "react";
import styles from "./Layout.module.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Layout;
