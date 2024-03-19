import React from "react";
import ImgCanva from "./ImgCanva";
import cat from "../assets/cat.png";
import cat2 from "../assets/cat2.png";

const ContainerFooter = () => {
  return (
    <div>
      <ImgCanva beforeImg={cat} afterImg={cat2} width={"200px"} />
    </div>
  );
};

export default ContainerFooter;
