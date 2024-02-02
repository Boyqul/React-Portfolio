import React from "react";
import styles from "./Footer.module.css";
import FooterCard from "./FooterCard/FooterCard";
import Linkedin from "../../../assets/linkedin.svg";
import behance from "../../../assets/behance.svg";
import gitHub from "../../../assets/gitHubs.svg";

//Footer
const Footer = () => {
  return (
    <div>
      <FooterCard />
      <div className={styles["footer-navbar"]}>
        <div className={styles["title"]}>
          <span>Copyright © Henrique Sousa · 2022</span>
        </div>
        <div className={styles["links"]}>
          <img src={Linkedin} alt="" />
          <img src={gitHub} alt="" />
          <img src={behance} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
