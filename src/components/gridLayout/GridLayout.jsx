import { useEffect, useState } from "react";
import AlbumCard from "../albumCard/AlbumCard";


const GridLayout = ({ isDarkMode }) => {

  const POST = process.env.NODE_ENV;

  const fetchUrl = ((POST === 'development') ? 'http://localhost:3000/db.json' : 'https://color-orgy.vercel.app/db.json'); 

  const [covers, setCovers] = useState([])

  useEffect(() => {
    const getCoverData = async() => {
      const coversData = await fetchCoverDetails()
      setCovers(coversData)
    }
    getCoverData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const fetchCoverDetails = async() => {
    const fetchData = await fetch(fetchUrl, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )

    const retrievedData = await fetchData.json()

    return retrievedData
  }

  
  return (
    <div className={`w-screen grid grid-cols-3 lg:grid-cols-6  gap-y-5 ${
      isDarkMode ? "dark:bg-black dark:text-white" : "bg-white text-black"
    }`}>
      {
        covers.map((cover, index) => {
          return <AlbumCard key={index} cover={cover} position={index} isDarkMode={isDarkMode}/>
        })
      }
    </div>
  )
}

export default GridLayout