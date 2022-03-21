import { useState, useEffect } from "react";
import GridLayout from "../../components/gridLayout/GridLayout";
import Header from "../../components/header/Header";
import Loadingpage from "../../components/loadingpage/Loadingpage";

const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 10000);
  // }, []);
  
  return (
    <div
      className={`h-screen overflow-x-hidden ${
        isDarkMode ? "dark:bg-black dark:text-[#FFFFFFB2]" : ""
      }`}
    >
      {loading ? (
        <Loadingpage isDarkMode={isDarkMode} />
      ) : (
        <>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <div className="w-screen">
            <GridLayout isDarkMode={isDarkMode} />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
