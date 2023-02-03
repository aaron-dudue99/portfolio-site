import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Button = ({ title }: any) => {
  return (
    <button className="rounded-md px-8 py-2 bg-green-500 text-white-text font-medium text-sm flex gap-2 items-center">
      {title}
    </button>
  );
};

export default Button;
