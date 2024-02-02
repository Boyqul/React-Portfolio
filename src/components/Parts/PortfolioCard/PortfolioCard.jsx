import React from "react";
import styles from "./PortfolioCard.module.css";
import Project1 from "../../../assets/project1.png";
import Project2 from "../../../assets/project2.png";
import Project3 from "../../../assets/project3.png";
import Project4 from "../../../assets/project4.png";
import Project5 from "../../../assets/project5.png";
import Project6 from "../../../assets/project6.png";
import Project7 from "../../../assets/project7.png";
import Project8 from "../../../assets/project8.png";

const PortfolioCard = () => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-item"]}>
        <h3>Portfolio-One</h3>
        <p>
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
        <div className={styles["link-btn"]}>
          <a
            href="https://654fcf694389ab6bc30f5886--super-donut-93c99b.netlify.app/"
            target="_blank"
          >
            <button>Site Link</button>
          </a>
          <a href="https://github.com/Boyqul" target="_blank">
            {" "}
            <button>Git Hub</button>
          </a>
        </div>
        <img src={Project1} alt="" />
      </div>
      <div className={styles["card-item"]}>
        <h3>Ziro</h3>
        <p>
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
        <div className={styles["link-btn"]}>
          <a
            href="https://bucolic-salmiakki-aaa088.netlify.app/"
            target="_blank"
          >
            <button>Site Link</button>
          </a>
          <a href="https://github.com/Boyqul" target="_blank">
            {" "}
            <button>Git Hub</button>
          </a>
        </div>
        <img src={Project2} alt="" />
      </div>{" "}
      <div className={styles["card-item"]}>
        <h3>Next-Portfolio</h3>
        <p>
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
        <div className={styles["link-btn"]}>
          <a
            href="https://glittering-jelly-fa88ee.netlify.app/"
            target="_blank"
          >
            <button>Site Link</button>
          </a>
          <a href="https://github.com/Boyqul" target="_blank">
            {" "}
            <button>Git Hub</button>
          </a>
        </div>
        <img src={Project3} alt="" />
      </div>{" "}
      <div className={styles["card-item"]}>
        <h3>Moutain Dashboard</h3>
        <p>
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
        <div className={styles["link-btn"]}>
          <a
            href="https://inspiring-lamington-db5a06.netlify.app/"
            target="_blank"
          >
            <button>Site Link</button>
          </a>
          <a href="https://github.com/Boyqul" target="_blank">
            {" "}
            <button>Git Hub</button>
          </a>
        </div>
        <img src={Project4} alt="" />
      </div>{" "}
      <div className={styles["card-item"]}>
        <h3>Payments App</h3>
        <p>
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
        <div className={styles["link-btn"]}>
          <a href="https://dynamic-custard-5742f3.netlify.app/" target="_blank">
            <button>Site Link</button>
          </a>
          <a href="https://github.com/Boyqul" target="_blank">
            {" "}
            <button>Git Hub</button>
          </a>
        </div>
        <img src={Project5} alt="" />
      </div>{" "}
      <div className={styles["card-item"]}>
        <h3>Drile</h3>
        <p>
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
        <div className={styles["link-btn"]}>
          <a href="https://lucent-cuchufli-4a3bbc.netlify.app/" target="_blank">
            <button>Site Link</button>
          </a>
          <a href="https://github.com/Boyqul" target="_blank">
            {" "}
            <button>Git Hub</button>
          </a>
        </div>
        <img src={Project6} alt="" />
      </div>{" "}
      <div className={styles["card-item"]}>
        <h3>Agon Web</h3>
        <p>
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
        <div className={styles["link-btn"]}>
          <a href="https://cosmic-griffin-45c189.netlify.app/" target="_blank">
            <button>Site Link</button>
          </a>
          <a href="https://github.com/Boyqul" target="_blank">
            {" "}
            <button>Git Hub</button>
          </a>
        </div>
        <img src={Project7} alt="" />
      </div>
      <div className={styles["card-item"]}>
        <h3>Inerrior</h3>
        <p>
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
        <div className={styles["link-btn"]}>
          <a
            href="https://verdant-hummingbird-1089ac.netlify.app/"
            target="_blank"
          >
            <button>Site Link</button>
          </a>
          <a href="https://github.com/Boyqul" target="_blank">
            {" "}
            <button>Git Hub</button>
          </a>
        </div>
        <img src={Project8} alt="" />
      </div>
    </div>
  );
};

export default PortfolioCard;
