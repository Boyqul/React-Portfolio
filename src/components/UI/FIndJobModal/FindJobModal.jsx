import React from "react";
import { MdCancel } from "react-icons/md";
import styles from "./FindJobModal.module.css";
import { FaTelegram } from "react-icons/fa6";

const FindJobModal = ({ modal, HandlerBtn }) => {
  return (
    <div
      style={{ display: modal ? "block" : "none", position: "absolute" }}
      className={styles["find-modal-container"]}
    >
      <div className={styles["find-modal-title"]}>
        <h1>About Me</h1>
        <MdCancel onClick={HandlerBtn} size={35} />
      </div>
      <div className={styles["find-job-head"]}>
        <h3>Boyqul Abdullayev</h3>
        <p>
          👋 Me chamo Uzbekistan Boyqul Abdullayev de Sousa, mas pode me chamar
          apenas de 👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces
          com JavaScript, React JS e Typescript. 🎓 Graduado em Análise e
          Desenvolvimento de Sistemas pela Fatec de São José dos Campos 💡
          Interesses em desenvolvimento Front-end com React, React Native, VueJS
          e UX/UI Design. 🚀 Tentando ser um pouquinho melhor do que ontem todos
          dias.
        </p>
      </div>
    </div>
  );
};

export default FindJobModal;
