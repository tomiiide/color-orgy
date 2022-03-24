import { useState, useEffect } from "react";
import GridLayout from "../../components/gridLayout/GridLayout";
import Header from "../../components/header/Header";
import Loadingpage from "../../components/loadingpage/Loadingpage";

const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);


  const ENVIRONMENT = process.env.NODE_ENV;

  console.log(ENVIRONMENT)

  const fetchUrl = (!(ENVIRONMENT === 'development') ? 'https://color-orgy.vercel.app/db.json' : 'http://localhost:3000/db.json'); 

  console.log(fetchUrl)

  useEffect(() => {
    const getAlbumsData = async() => {
      const albumsData = await fetchAlbumsDetails()
      setAlbums(albumsData)
      // console.log(albums.length())
      console.log(albums)
    }
    getAlbumsData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const fetchAlbumsDetails = async() => {
    const fetchData = await fetch(fetchUrl, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )

    const retrievedData = await fetchData.json()

    console.log("Retrived Data", retrievedData)

    return retrievedData
  }
  
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
            <GridLayout isDarkMode={isDarkMode} albums={albums}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
