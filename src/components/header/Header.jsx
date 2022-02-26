import React from "react";

const Header = () => {
  return (
    <div className=" h-[11.25rem] pt-[68px] md:flex ">
      <div className="flex flex-col  justify-start pl-[11px]">
        <h1 className="text-[24px] ">
          A Curation of <span className="text-black underline">2020</span>
          <select></select>
        </h1>
        <h1 className="text-[24px]">Nigerian Albums.</h1>
      </div>
      <div className="flex justify-end pr-[17px] pb-[23px]">
        <div className="flex flex-col">
          <p className="text-[12px]">by</p>
          <p className="text-[12px] underline">WeTalkSound</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
