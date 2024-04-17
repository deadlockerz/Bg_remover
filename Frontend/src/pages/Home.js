import React, { useState } from "react";
import Container from "../components/Container";
import ContainerHeader from "../components/ContainerHeader";
import ImgCanva from "../components/ImgCanva";
import cat from "../assets/cat.png";
import cat2 from "../assets/cat2.png";

const Home = () => {
  const [imgFile, setImgFile] = useState(null);
  const [dragOver, setDragOver] = useState(false); // State to track drag-over

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true); // Set drag-over state to true
  };

  const handleDragLeave = () => {
    setDragOver(false); // Reset drag-over state when leaving
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Check if files were dropped
    if (e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setImgFile(file);
    }
    setDragOver(false); // Reset drag-over state after drop
  };

  return (
    <div
      className={`drop_zone ${
        dragOver ? "border-blue-600 bg-blue-200" : "border-white"
      } border-8 border-dashed p-4 rounded-lg`}
      onDragOver={handleDragOver}
      onDrop={handleOnDrop}
      onDragLeave={handleDragLeave}
    >
      <div className="flex flex-col items-center mx-auto w-full gap-5 lg:gap-40 lg:flex-row lg:justify-center lg:items-center ">
        <div className="flex-1 min-w-0 lg:min-w-auto lg:max-w-xs">
          <ContainerHeader />
        </div>
        <div className="flex-1 min-w-0 lg:min-w-auto lg:max-w-xs">
          <Container imgFile={imgFile} />
        </div>
      </div>
      <ImgCanva beforeImg={cat} afterImg={cat2} width={"200px"} />
    </div>
  );
};

export default Home;
