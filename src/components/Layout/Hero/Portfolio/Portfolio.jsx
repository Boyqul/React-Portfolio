import React from "react";
import styles from "./Portfolio.module.css";
import { IoIosLink } from "react-icons/io";
import Design from "../../../../assets/DesignIcon.svg";
import PortfolioCard from "../../../Parts/PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <div className={styles["portfolio"]}>
      <div className={styles["portfolio-title"]}>
        <div className={styles["left"]}>
          <button>
            <IoIosLink size={20} />
            Portfolio
          </button>
          <h1>Trabalhos e projetos</h1>
        </div>
        <div className={styles["right"]}>
          <button>Ui Design</button>
          <button>Design</button>
          <button>Ui Design</button>
        </div>
      </div>
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
