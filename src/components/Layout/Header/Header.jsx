import React from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Linkedin from "../../../assets/linkedin.svg";
import behance from "../../../assets/behance.svg";
import gitHub from "../../../assets/gitHubs.svg";
import person from "../../../assets/person.avif";
import HeaderCard from "../../Parts/HeaderCard/HeaderCard";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className={styles["header-container"]}>
        <div className={styles["header-title"]}>
          <button>👋 Saudações!</button>
          <h1>Boyqul Abdullayev</h1>
          <h5>
            <span>Front-end</span> developer Math Subject
          </h5>
          <div className={styles["header-links"]}>
            <img src={Linkedin} alt="" />
            <img src={gitHub} alt="" />
            <img src={behance} alt="" />
          </div>
        </div>

        <div className={styles["person-img"]}>
          <img src={person} alt="" className={styles["image"]} />
          <div className={styles["middle"]}>
            <div className={styles["text"]}>Boyqul Abdullayev</div>
          </div>
        </div>
      </div>
      <HeaderCard />
    </div>
  );
};

export default Header;
