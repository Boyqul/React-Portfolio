import React from "react";
import styles from "./Technology.module.css";
import {
  FaReact,
  FaCss3Alt,
  FaSass,
  FaNode,
  FaGithub,
  FaDatabase,
  FaGitlab,
} from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoBootstrap } from "react-icons/bi";
import { SiRedux } from "react-icons/si";

const Technology = () => {
  return (
    <div className={styles["technology"]}>
      <div className={styles["technology-title"]}>
        <button>🧑‍💻 Skills · Experiências</button>
        <h1> Tecnologias e habilidades</h1>
      </div>
      <div className={styles["technology-head"]}>
        <FaReact size={70} />
        <TbBrandTypescript size={70} />
        <RiJavascriptFill size={70} />
        <FaHtml5 size={70} />
        <FaCss3Alt size={70} />
        <BiLogoBootstrap size={70} />
        <FaSass size={70} />
        <FaNode size={70} />
        <FaGithub size={70} />
        <SiRedux size={70} />
        <FaDatabase size={70} />
        <FaGitlab size={70} />
      </div>
    </div>
  );
};

export default Technology;
