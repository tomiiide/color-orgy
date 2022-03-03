import React from 'react'

const AlbumCard = () => {
  return (
    <div className='min-w-[120px] min-h-[120px] pb-[5px]'>
        <div className='w-full h-auto bg-black'><img className='w-full h-auto object-cover' src={process.env.PUBLIC_URL + '/assets/images/album-cover-1.svg'} alt='' /></div>
        <div className='w-full h-auto p-[5px]'>
            <p className='text-sm font-bold'>LOFN</p>
            <p className='text-sm text-[#0000007D]'>WeTalkSound</p>
            <p className='text-xs text-[#0000007D]'>Dec 1</p>
        </div>
    </div>
  )
}

export default AlbumCard