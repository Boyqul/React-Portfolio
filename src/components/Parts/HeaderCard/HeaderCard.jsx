import React from "react";
import styles from "./HeaderCard.module.css";
import codeIcon from "../../../assets/CodeIcon.svg";
import ProjectIcon from "../../../assets/ProjectsIcon.svg";
import DesignIcon from "../../../assets/DesignIcon.svg";

const HeaderCard = () => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card"]}>
        <div className={styles["card-item"]}>
          <img src={codeIcon} alt="" />
          <span>3 anos como</span>
          <h2>Programador</h2>
        </div>
        <div className={styles["card-item"]}>
          <img src={ProjectIcon} alt="" />
          <span>7 anos de</span>
          <h2>Trabalhos</h2>
        </div>
        <div className={styles["card-item"]}>
          <img src={DesignIcon} alt="" />
          <span>4 anos como</span>
          <h2>Designer</h2>
        </div>
      </div>
      <div className={styles["working-now"]}>
        <div className={styles["title1"]}>
          <span>Desenvolvedor</span>
          <h2>Front-end</h2>
        </div>
        <div className={styles["title2"]}>
          <span>Dezenas de projetos e</span>
          <h2>Experiências</h2>
        </div>
        <div className={styles["title3"]}>
          <span>Designer Freelancer e</span>
          <h2>UI · UX</h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
