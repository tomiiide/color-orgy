import { useState, useEffect } from "react";
import GridLayout from "../../components/gridLayout/GridLayout";
import Header from "../../components/header/Header";
import Loadingpage from "../../components/loadingpage/Loadingpage";

const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    setLoading(true);

    const getAlbumsData = async() => {
      const albumsData = await fetchAlbumsDetails()
      setAlbums(albumsData)
    }

    getAlbumsData()

    setTimeout(() => {
      setLoading(false);
    }, 12000);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const ENVIRONMENT = process.env.NODE_ENV;

  const fetchUrl = (!(ENVIRONMENT === 'development') ? 'https://color-orgy.vercel.app/db.json' : 'http://localhost:3000/db.json');
  

  const fetchAlbumsDetails = async() => {
    const fetchData = await fetch(fetchUrl, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )

    const retrievedData = await fetchData.json()

    for(let i = 0; i <= retrievedData.length; i++) {
      let percentage = Math.floor((i / retrievedData.length) * 100);
      setProgress(percentage);
    }
    return retrievedData
  }

  
  return (
    <div
      className={`h-screen overflow-x-hidden relative ${
        isDarkMode ? "dark:bg-black dark:text-[#FFFFFFB2]" : ""
      } ${loading ? 'overflow-y-hidden' : '' }`}
    >
      <Loadingpage isDarkMode={isDarkMode} percentage={progress} loading={loading}/>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="w-screen">
        <GridLayout isDarkMode={isDarkMode} albums={albums}/>
      </div>
    </div>
  );
};

export default Homepage;
