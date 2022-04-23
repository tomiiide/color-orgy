import './albumCard.css';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const AlbumCard = ({ albumDetails, position, isDarkMode }) => {

  const [clicked, setClicked] = useState(false);

  const openHandleClick = () => {
    setClicked(true);
    console.log(clicked);
  }

  const closeHandleClick = () => {
    setClicked(false);
    console.log(clicked);
  }

  // const album = document.getElementById('albumCard');

  // const albumBg = document.getElementById('albumCardBackground');

  // const clickFunc = () => {
  //   albumBg.style.display= 'block';
  //   album.classList.add = 'clickedAlbum';
  // }

  // window.onclick = function(event) {
  //   if (event.target == albumBg) {
  //     albumBg.style.display = "none";
  //   }
  // }

  const SelectedAlbum = () => {
    return (
      <div>
        <div id='albumCardBackground' className='modalBackground' onClick={closeHandleClick}>
            <div id='albumCard' className='w-full h-full relative flex flex-col justify-center items-center  bg-white text-black'>
            <div className='w-full h-full' style={{backgroundImage: `url(/assets/images/${(position % 2) ? 'album-cover-1.svg' : 'album-cover-2.svg'})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '220%', filter: 'blur(3px)', WebkitFilter: 'blur(3px)'}}></div>
            <div className=' absolute top-0 bottom-0 left-0 right-0 flex flex-col flex-start items-center py-[40px] px-[10px]'>
                <div className=''><span><IoMdClose /></span></div>
                <div className='w-4/5 h-auto pb-[15px] px-[15px]' style={{backgroundColor: 'rgba(255, 255, 255, 0.678)'}}>
                  <div className='h-fit py-[4px] flex justify-between items-center'>
                    <p className='font-bold text-base truncate albumText text-[#725994]'>{albumDetails.album}</p>
                    <p className='font-bold text-base truncate albumText text-[#725994]'>{albumDetails.artist}</p>
                  </div>
                  <div className='w-full h-auto bg-black'>
                    <img className='w-full h-auto object-cover' src={process.env.PUBLIC_URL + `/assets/images/${(position % 2) ? 'album-cover-1.svg' : 'album-cover-2.svg'}`} alt='' />
                  </div>
                </div>
                
                <div className='h-full w-full flex justify-center items-center'>
                  <ul className='w-[75%]'>
                    <li className='btns  bg-[#F2E5EF] px-[20px] py-[13px] my-[15px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[25px] h-[25px] object-cover mr-[15px]' src={process.env.PUBLIC_URL + `/assets/images/Spotify_icon.png`} alt='' /><p className='text-sm'>Listen on Spotify</p></li>
                    <li className='btns  bg-[#F2E5EF] px-[20px] py-[13px] my-[15px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[25px] h-[25px] object-cover mr-[15px]' src={process.env.PUBLIC_URL + `/assets/images/Apple_music_icon.png`} alt='' /><p className='text-sm'>Listen on Apple Music</p></li>
                    <li className='btns  bg-[#F2E5EF] px-[20px] py-[13px] my-[15px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[25px] h-[25px] object-cover mr-[15px]' src={process.env.PUBLIC_URL + `/assets/images/audiomack_icon.png`} alt='' /><p className='text-sm'>Listen on Audiomack</p></li>
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