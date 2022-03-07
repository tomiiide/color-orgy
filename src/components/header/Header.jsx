import React from "react";

const Header = () => {
  return (
    <div className="  pt-[50px] md:flex justify-between relative md:items-end md:pt-[30px] md:pb-[25px] pl-[30px] md:pr-[35px]">
       
      <div className="flex flex-col  justify-start pl-[11px]">
        <h1 className="text-[24px] md:text-[40px] lg:text-[48px]">
          A Curation of <span className="text-black underline">2020</span>
          <select></select>
        </h1>
        <h1 className="text-[24px] md:text-[40px] lg:text-[48px]">Nigerian Albums.</h1>
      </div>
      <div className="flex justify-end pr-[17px]">
      <div className="h-[29px] w-[50px] rounded-[40px] bg-black absolute top-[20%]">
        <div className=" rounded-full p-[4px] bg-white h-[18px] w-[18px]">
           <img  src={process.env.PUBLIC_URL + `/assets/images/ic_baseline-dark-mode.png`} alt=''/>
         </div>
      </div>
        <div className="flex flex-col">
          <p className="text-[12px] md:text-[28px] lg:[36px]">by</p>
          <p className="text-[12px] md:text-[28px] lg:[36px] underline">WeTalkSound</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
