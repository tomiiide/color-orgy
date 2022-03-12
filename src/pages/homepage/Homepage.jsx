import { useState, useEffect } from "react";
import GridLayout from "../../components/gridLayout/GridLayout";
import Header from "../../components/header/Header";
import Loadingpage from "../../components/loadingpage/Loadingpage";

const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div
      className={`h-screen overflow-x-hidden ${
        isDarkMode ? "dark:bg-black dark:text-white" : ""
      }`}
    >
      {loading ? (
        <Loadingpage />
      ) : (
        <>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <div className="w-screen">
            <GridLayout />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
