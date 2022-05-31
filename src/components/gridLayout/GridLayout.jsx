// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import AlbumCard from "../albumCard/AlbumCard";


const GridLayout = ({ isDarkMode, albums }) => {

  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])
  
  
  return (
    <div className={`w-screen grid grid-cols-3 lg:grid-cols-6  gap-y-10 ${
      isDarkMode ? "dark:bg-black dark:text-white" : "bg-white text-black"
    }`}>
      {
        (albums)
        ?
        (
        albums.map((album, index) => {
          return <AlbumCard key={index} albumDetails={album} position={index} isDarkMode={isDarkMode} isLoading={isLoading}/>
        })
        )
        :
        (
          <div className='w-full h-screen flex items-center justify-center'>
            <h2>OOOPS...SOMETHING IS WRONG.</h2>
          </div>
        )
      }
    </div>
  )
}

export default GridLayout