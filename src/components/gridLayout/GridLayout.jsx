// import { useEffect, useState } from "react";
import AlbumCard from "../albumCard/AlbumCard";


const GridLayout = ({ isDarkMode, albums }) => {
  
  return (
    <div className={`w-screen grid grid-cols-3 lg:grid-cols-6  gap-y-5 ${
      isDarkMode ? "dark:bg-black dark:text-white" : "bg-white text-black"
    }`}>
      {
        (albums)
        ?
        (
        albums.map((album, index) => {
          return <AlbumCard key={index} albumDetails={album} position={index} isDarkMode={isDarkMode}/>
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