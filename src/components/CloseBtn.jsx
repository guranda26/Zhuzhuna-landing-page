import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const CloseBtn = () => {
  return (
    <div>
      <IoCloseSharp className="hover:bg-red-700 size-[28px] bg-color-secondary absolute left-7 top-3 rounded-md" />
    </div>
  );
};

export default CloseBtn;
