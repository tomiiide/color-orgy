import AlbumCard from "../albumCard/AlbumCard"
import { useEffect, useState } from 'react'



const GridLayout = () => {

  const [covers, setCovers] = useState([])

  useEffect(() => {
    const getCoverData = async() => {
      const coversData = await fetchCoverDetails()
      setCovers(coversData)
    }

    getCoverData()
  }, [])
  

  const fetchCoverDetails = async() => {
    const fetchData = await fetch('http://localhost:3000/db.json', {
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
    <div className='w-screen grid grid-cols-3 lg:grid-cols-6  gap-y-5'>
      {
        covers.map((cover, index) => {
          return <AlbumCard key={index} cover={cover} position={index}/>
        })
      }
    </div>
  )
}

export default GridLayout