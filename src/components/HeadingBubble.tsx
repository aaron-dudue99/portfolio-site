import React from "react";

const HeadingBubble = ({ alignment }: any) => {
  const left: string = "ml-4";
  const right: String = "mr-4 float-right";

  return (
    <div
      className={`rounded-full bg-green-500 w-6 h-6 block ${
        alignment === "left" ? left : right
      }`}
    />
  );
};

export default HeadingBubble;
