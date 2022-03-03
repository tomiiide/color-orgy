import AlbumCard from "../albumCard/AlbumCard"
import { useEffect, useState } from 'react'



const GridLayout = () => {

  const [coverDetails, setCoverDetails] = useState([])

  useEffect(() => {
    const getCoverData = async() => {
      const coverData = await  fetchCoverDetails()
      setCoverDetails(coverData)
    }

    getCoverData()
  }, [])
  

  const fetchCoverDetails = async() => {
    const fetchData = await fetch('http://localhost:3000/covers')

    const retrievedData = await fetchData.json()

    return retrievedData
  }

  console.log(coverDetails)

  return (
    <div className='w-screen grid grid-cols-3 lg:grid-cols-6  gap-y-5'>
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
    </div>
  )
}

export default GridLayout