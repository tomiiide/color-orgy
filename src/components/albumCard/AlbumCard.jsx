import './albumCard.css';
import { useState } from 'react';

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
            <div id='albumCard' style={{backgroundImage: 'url(album-cover-1.svg)'}} className='w-[350px] h-fit py-[20px] px-[10px] flex flex-col justify-center items-center z-10 bg-white text-black'>
              <div className='w-4/5 h-auto bg-black'>
                <img className='w-full h-auto object-cover' src={process.env.PUBLIC_URL + `/assets/images/${(position % 2) ? 'album-cover-1.svg' : 'album-cover-2.svg'}`} alt='' />
              </div>
                <div className='p-[10px]'>
                  <ul>
                    <li className='btns  bg-[#F2E5EF] px-[15px] py-[8px] my-[15px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[20px] h-[20px] object-cover mr-[10px]' src={process.env.PUBLIC_URL + `/assets/images/Spotify_icon.png`} alt='' /><p className='text-xs'>Listen on Spotify</p></li>
                    <li className='btns  bg-[#F2E5EF] px-[15px] py-[8px] my-[15px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[20px] h-[20px] object-cover mr-[10px]' src={process.env.PUBLIC_URL + `/assets/images/Apple_music_icon.png`} alt='' /><p className='text-xs'>Listen on Apple Music</p></li>
                    <li className='btns  bg-[#F2E5EF] px-[15px] py-[8px] my-[15px] cursor-pointer rounded-full flex justify-start items-center'><img className='w-[20px] h-[20px] object-cover mr-[10px]' src={process.env.PUBLIC_URL + `/assets/images/audiomack_icon.png`} alt='' /><p className='text-xs'>Listen on Audiomack</p></li>
                  </ul>
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
    <div>
      {
        (clicked)
        ?
        <SelectedAlbum />
        :
        <NormalCard />
      }
    </div>
  )
}

export default AlbumCard