import React from "react";
import styles from "./Faqs.module.css";
import FaqsCard from "./FaqsCard/FaqsCard";

const Faqs = () => {
  return (
    <div className={styles["Faqs"]}>
      <div className={styles["Faqs-title"]}>
        <button>💼 Carreira</button>
        <h1>Trajetória até aqui</h1>
      </div>
      <div className={styles["Faqs-head"]}>
        <div className={styles["Faqs-head-title"]}>
          <div className={styles["left"]}>
            <h3>Area Fron End </h3>
            <span> Full Stack Developer</span>
          </div>
          <div className={styles["right"]}>
            <h3>Area Back End</h3>
            <span>Full Stack Developer</span>
          </div>
        </div>
      </div>
      <FaqsCard />
    </div>
  );
};

export default Faqs;
