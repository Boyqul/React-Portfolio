import React from "react";
import styles from "./Navbar.module.css";
import NavLogo from "../../../../assets/nav-logo.svg";

const Navbar = () => {
  return (
    <div className={styles["container-navbar"]}>
      <h1>
        <img src={NavLogo} alt="" />
      </h1>

      <ul>
        <li>Home</li>
        <li>Sobre Mim</li>
        <li>Portfolio</li>
        <li>Skills</li>
        <li>Carreira</li>
        <li>Contato</li>
      </ul>
    </div>
  );
};

export default Navbar;
