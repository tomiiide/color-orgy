import React from 'react'

const AlbumCard = ({ cover, position }) => {
  return (
    <div className='min-w-[120px] min-h-[120px] pb-[5px] cursor-pointer'>
        <div className='w-full h-auto bg-black'><img className='w-full h-auto object-cover' src={process.env.PUBLIC_URL + `/assets/images/${(position % 2) ? 'album-cover-1.svg' : 'album-cover-2.svg'}`} alt='' /></div>
        <div className='w-full h-auto p-[5px]'>
            <p className='text-sm font-bold'>{cover.album}</p>
            <p className='text-sm text-[#0000007D]'>{cover.artist}</p>
            <p className='text-xs text-[#0000007D]'>{cover.date}</p>
        </div>
    </div>
  )
}

export default AlbumCard