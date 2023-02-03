import React from "react";

const ContactGroup = ({ type, detail }: any) => {
  return (
    <div className="flex flex-col justify-end items-end gap-2">
      <h4 className="text-lg font-serif text-green-500 uppercase font-semibold">
        {type}
      </h4>
      <p className="text-lg text-white-text">{detail}</p>
      <div className="bg-green-700 w-40 h-1"></div>
    </div>
  );
};

export default ContactGroup;
