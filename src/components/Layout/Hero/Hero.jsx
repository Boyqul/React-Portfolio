import React from "react";
import FindProgrammer from "./FindProgrammer/FindProgrammer";
import Portfolio from "./Portfolio/Portfolio";
import Technology from "./Technology/Technology";
import Faqs from "./Faqs/Faqs";

const Hero = () => {
  return (
    <div>
      <FindProgrammer />
      <Portfolio />
      <Technology />
      <Faqs />
    </div>
  );
};

export default Hero;
