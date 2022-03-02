import React from "react";

const Header = () => {
  return (
    <div className=" h-[11.25rem] pt-[68px] md:flex justify-between md:items-center md:pb-14">
      <div className="flex flex-col  justify-start pl-[11px] md:h-[136px] md:w-[540px]">
        <h1 className="text-[24px] md:text-[48px]">
          A Curation of <span className="text-black underline">2020</span>
          <select></select>
        </h1>
        <h1 className="text-[24px] md:text-[48px]">Nigerian Albums.</h1>
      </div>
      <div className="flex justify-end pr-[17px] pb-[23px]">
        <div className="flex flex-col md:h-[116px] md:w-[311px]">
          <p className="text-[12px] md:text-[48px]">by</p>
          <p className="text-[12px] md:text-[48px] underline">WeTalkSound</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
