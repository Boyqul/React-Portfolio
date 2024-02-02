import React from "react";
import styles from "./FooterCard.module.css";
import { FiMessageCircle } from "react-icons/fi";
import Person1 from "../../../../assets/person1.jpg";

const FooterCard = () => {
  return (
    <div className={styles["footer-card"]}>
      <div className={styles["card-title"]}>
        <button>💬 Recomendações</button>
        <h2> Em depoimento</h2>
      </div>
      <div className={styles["card"]}>
        <div className={styles["card-item"]}>
          <FiMessageCircle size={35} className={styles["messages"]} />
          <p>
            O Washington está sempre estudando e aprendendo, buscando aprimorar
            aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de
            seus objetivos, com foco e organização. Além disso, tecnicamente, no
            que se propõe a fazer, faz bem feito. Sempre!
          </p>
          <div className={styles["profile"]}>
            <div className={styles["left"]}>
              <img src={Person1} alt="" />
            </div>
            <div className={styles["right"]}>
              <h3>Romário Lima</h3>
              <span>Engenheiro da Computação</span>
            </div>
          </div>
        </div>
        <div className={styles["card-item"]}>
          <FiMessageCircle size={35} className={styles["messages"]} />
          <p>
            O Washington está sempre estudando e aprendendo, buscando aprimorar
            aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de
            seus objetivos, com foco e organização. Além disso, tecnicamente, no
            que se propõe a fazer, faz bem feito. Sempre!
          </p>
          <div className={styles["profile"]}>
            <div className={styles["left"]}>
              <img src={Person1} alt="" />
            </div>
            <div className={styles["right"]}>
              <h3>Romário Lima</h3>
              <span>Engenheiro da Computação</span>
            </div>
          </div>
        </div>
        <div className={styles["card-item"]}>
          <FiMessageCircle size={35} className={styles["messages"]} />
          <p>
            O Washington está sempre estudando e aprendendo, buscando aprimorar
            aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de
            seus objetivos, com foco e organização. Além disso, tecnicamente, no
            que se propõe a fazer, faz bem feito. Sempre!
          </p>
          <div className={styles["profile"]}>
            <div className={styles["left"]}>
              <img src={Person1} alt="" />
            </div>
            <div className={styles["right"]}>
              <h3>Romário Lima</h3>
              <span>Engenheiro da Computação</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
