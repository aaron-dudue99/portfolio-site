import React from "react";

const Button = ({title}: any) => {
  return (
    <button className="rounded-md px-8 py-2 bg-green-300 text-dark font-medium text-sm ">
      {title}
    </button>
  );
};

export default Button;
