import './albumCard.css';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const AlbumCard = ({ albumDetails, position, isDarkMode, isLoading }) => {

  const [clicked, setClicked] = useState(false);

  const openHandleClick = () => {
    setClicked(true);
    console.log(clicked);
  }

  const closeHandleClick = () => {
    setClicked(false);
    console.log(clicked);
  }



  const SelectedAlbum = () => {
    return (
      <div>
        <div className='modalBackground z-2'>
            <div className='w-full h-full relative flex flex-col justify-center items-center  bg-white text-black z-10 md:w-[60%] md:h-[75%] lg:w-[32%] lg:h-[86%] xl:w-[27%] xl:h-[94%] 2xl:w-[18%] 2xl:h-[64%]'>
            <div className='w-full h-full' style={{backgroundImage: `url(/assets/images/${(position % 2) ? 'album-cover-1.svg' : 'album-cover-2.svg'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '220%', filter: 'blur(3px)', WebkitFilter: 'blur(3px)'}}></div>
            <div className=' absolute top-0 bottom-0 left-0 right-0 flex flex-col flex-start items-center py-[40px] lg:py-[18px] '>
                <div className='w-full h-fit mb-[30px] px-[20px] lg:mb-[10px] lg:px-[20px] flex justify-end'><IoMdClose className='w-[22px] h-[22px] p-[5px] rounded-full cursor-pointer' style={{color: 'rgba(0, 0, 0, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.678)'}} onClick={closeHandleClick}/></div>
                <div className='w-full mt-[50px] mb-[30px] lg:mt-[15px] lg:mb-[10px]'><img className='w-full' src={process.env.PUBLIC_URL + `/assets/images/sound-waves.svg`} alt=''/></div>
                <div className='w-[55%] h-auto pb-[15px] px-[15px] lg:px-[8px] lg:pb-[8px]' style={{backgroundColor: 'rgba(255, 255, 255, 0.44)'}}>
                  <div className='h-fit py-[4px] flex justify-between items-center'>
                    <p className='font-bold text-base lg:text-sm truncate albumText text-[#725994]'>{albumDetails.album}</p>
                    <p className='font-bold text-base lg:text-sm truncate albumText text-[#725994]'>{albumDetails.artist}</p>
                  </div>
                  <div className='w-full h-auto bg-black'>
                    <img className='w-full h-auto object-cover' src={process.env.PUBLIC_URL + `/assets/images/${(position % 2) ? 'album-cover-1.svg' : 'album-cover-2.svg'}`} alt='' />
                  </div>
                </div>
                <div className='h-fit w-full pt-[25px] flex justify-center items-center'>
                  <ul className='w-[56%]'>
                    <li className='btns  bg-[#F2E5EF] px-[15px] py-[13px] mb-[15px] lg:px-[10px] lg:py-[10px] lg:mb-[10px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[22px] h-[22px] object-cover mr-[12px] lg:w-[20px] lg:h-[20px] lg:mr-[10px]' src={process.env.PUBLIC_URL + `/assets/images/Spotify_icon.png`} alt='' /><p className='text-sm lg:text-xs'>Listen on Spotify</p></li>
                    <li className='btns  bg-[#F2E5EF] px-[15px] py-[13px] my-[15px] lg:px-[10px] lg:py-[10px] lg:mb-[10px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[22px] h-[22px] object-cover mr-[12px] lg:w-[20px] lg:h-[20px] lg:mr-[10px]' src={process.env.PUBLIC_URL + `/assets/images/Apple_music_icon.png`} alt='' /><p className='text-sm lg:text-xs'>Listen on Apple Music</p></li>
                    <li className='btns  bg-[#F2E5EF] px-[15px] py-[13px] my-[15px] lg:px-[10px] lg:py-[10px] lg:mb-[10px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[22px] h-[22px] object-cover mr-[12px] lg:w-[20px] lg:h-[20px] lg:mr-[10px]' src={process.env.PUBLIC_URL + `/assets/images/audiomack_icon.png`} alt='' /><p className='text-sm lg:text-xs'>Listen on Audiomack</p></li>
                  </ul>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
  }



  const NormalCard = () => {
    return (

      (isLoading) 
      ?
      (
        <div id='albumCard' className={`min-w-[120px] w-max-[220px] min-h-[120px] h-[220px] p-[5px] cursor-pointer albumSkeletonLoader`}>
            <div className={`w-full h-[70%] ${ isDarkMode ? "bg-[#313131]" : "bg-[#8a8888]" }`}></div>
            <div className='w-full h-[30%] py-[5px]'>
                <div className={`w-[80%] h-[20%] mb-[5px] ${ isDarkMode ? "bg-[#313131]" : "bg-[#8a8888]" }`}></div>
                <div className={`w-[60%] h-[20%] mb-[5px] ${ isDarkMode ? "bg-[#313131]" : "bg-[#8a8888]" }`}></div>
                <div className={`w-[40%] h-[20%] ${ isDarkMode ? "bg-[#313131]" : "bg-[#8a8888]" }`}></div>
            </div>
        </div>
      )
      :
      (
        <div id='albumCard' className={`min-w-[120px] min-h-[120px] pb-[5px] cursor-pointer ${(clicked) ? 'clickedAlbum' : ''}`} onClick={openHandleClick}>
            <div className='w-full h-auto bg-black'><img className='w-full h-auto object-cover' src={process.env.PUBLIC_URL + `/assets/images/${(position % 2) ? 'album-cover-1.svg' : 'album-cover-2.svg'}`} alt='' /></div>
            <div className='w-full h-auto p-[5px]'>
                <p className='text-sm font-bold truncate'>{albumDetails.album}</p>
                <p className={`text-sm truncate  ${
          isDarkMode ? " dark:text-[#FFFFFF80]" : "text-[#0000007D]"
        }`}>{albumDetails.artist}</p>
                <p className={`text-xs  ${
          isDarkMode ? " dark:text-[#FFFFFF80]" : "text-[#0000007D]"
        }`}>{albumDetails.date}</p>
            </div>
        </div>
      )
      
    )
  }


  return (
    <>
      {
        (clicked)
        ?
        <SelectedAlbum />
        :
        <NormalCard />
      }
    </>
  )
}

export default AlbumCard