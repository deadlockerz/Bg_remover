import React from "react";

const Output = ({ bgImage }) => {
  return (
    <div className="bg-white border border-secondary-main p-3 relative">
      <img
        src={bgImage}
        alt="Background"
        draggable="false"
        className="object-center w-full h-auto"
      />
    </div>
  );
};

export default Output;
