import React from "react";
import styles from "./FindProgrammer.module.css";
import findJobImg from "../../../../assets/find_job.jpg";
import { useState } from "react";
import FindJobModal from "../../../UI/FIndJobModal/FindJobModal";

const FindProgrammer = () => {
  const [modal, setModal] = useState(false);
  //HandlerBtn functions
  const HandlerBtn = () => {
    setModal(false);
  };
  return (
    <>
      <div className={styles["find-job"]}>
        <div className={styles["find-job-img"]}>
          <img src={findJobImg} alt="" />
        </div>
        <div className={styles["find-job-title"]}>
          <button className={styles["span-btn"]}>🧐 Sobre mim</button>
          <h1>Washington Henrique Fernandes de Sousa</h1>
          <button className={styles["about-me"]} onClick={() => setModal(true)}>
            About Me
          </button>
        </div>
      </div>

      <FindJobModal modal={modal} HandlerBtn={HandlerBtn} />
    </>
  );
};

export default FindProgrammer;
