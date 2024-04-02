import React from "react";
import Container from "../components/Container";
import ContainerHeader from "../components/ContainerHeader";
// import ContainerFooter from "../components/containerFooter";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center mx-auto w-full gap-5 lg:gap-40 lg:flex-row lg:justify-center lg:items-center ">
        <div className="flex-1 min-w-0 lg:min-w-auto lg:max-w-xs">
          <ContainerHeader />
        </div>
        <div className="flex-1 min-w-0 lg:min-w-auto lg:max-w-xs">
          <Container />
        </div>
      </div>
      {/* <ContainerFooter /> */}
    </div>
  );
};

export default Home;
