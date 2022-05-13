import React from "react";
import "./Header.css";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="  pt-[50px] md:flex justify-between relative md:items-end md:pt-[30px] md:pb-[25px] pl-[30px] md:pr-[35px]">
      <div className="flex flex-col  justify-start pl-[11px]">
        <h1 className="text-[24px] md:text-[40px] lg:text-[48px]">
          A Curation of
          <select
            className={`underline border-none outline-none  bg-transparent ${
              isDarkMode ? " dark:text-[#FFFFFF]" : "text-[#000000]"
            }`}
          >
            <option className="text-black">2020</option>
            <option className="text-black">2021</option>
            <option className="text-black">2022</option>
          </select>
        </h1>
        <h1 className="text-[24px] md:text-[40px] lg:text-[47.5px]">
          Nigerian Albums.
        </h1>
      </div>
      <div className="flex justify-end pr-[17px]">
        <div className=" absolute top-[20%]">
          <div>
            <input
              checked={isDarkMode}
              onChange={(ev) => setIsDarkMode(ev.target.checked)}
              type="checkbox"
              name=""
              id="checkbox"
              className="hidden"
            />
            <label htmlFor="checkbox" className="cursor-pointer">
              {isDarkMode ? (
                <div className="w-9 h-6 flex items-center bg-white rounded-full p-1">
                  <div className="w-4 h-4 bg-black rounded-full shadow switch-ball flex justify-center items-center">
                    <img
                      src={
                        process.env.PUBLIC_URL + `/assets/images/whh_day.png`
                      }
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div className="w-9 h-6 flex items-center bg-black rounded-full p-1">
                  <div className="w-4 h-4 bg-white rounded-full shadow switch-ball">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/images/ic_baseline-dark-mode.png`
                      }
                      alt=""
                    />
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[12px] md:text-[28px] lg:[36px]">by</p>
          <p className="text-[12px] md:text-[28px] lg:[36px] underline">
            WeTalkSound
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
