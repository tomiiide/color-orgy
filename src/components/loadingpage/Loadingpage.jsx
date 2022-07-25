
const Loadingpage = ({ isDarkMode, percentage, loading }) => {

  // console.log('Loading Percentage: ', percentage);

  return (
    <div className={`absolute z-10 top-0 bottom-0 right-0 left-0 items-center justify-center flex-col ${
      isDarkMode ? "dark:bg-black dark:text-white" : "bg-white text-black"
    }  ${loading ? 'flex' : 'hidden'}`}>
        <div className='w-full h-full flex items-center justify-center'>
          <img className='w-50 h-auto object-cover absolute top-[38%] right-[10%] lg:top-[32%] lg:right-[36%] z-30' src={process.env.PUBLIC_URL + `/assets/images/loading-image-1.svg`} alt='' />
          <img className='w-42 h-auto object-cover absolute top-[27%] left-[5%] lg:top-[22%] lg:left-[38.2%] z-10' src={process.env.PUBLIC_URL + `/assets/images/loading-image-2.svg`} alt='' />
          <img className='w-40 h-auto object-cover absolute top-[27%] right-[10%] lg:top-[23%] lg:right-[33.5%] z-20' src={process.env.PUBLIC_URL + `/assets/images/loading-image-3.svg`} alt='' />
          <img className='w-42 h-auto object-cover absolute top-[15%] right-[30%] lg:top-[10%] lg:right-[43%] z-50' src={process.env.PUBLIC_URL + `/assets/images/loading-image-4.svg`} alt='' />
          <img className='w-44 h-auto object-cover absolute top-[49%] left-[15%] lg:top-[45%] lg:left-[43%] z-40' src={process.env.PUBLIC_URL + `/assets/images/loading-image-5.svg`} alt='' />
        </div>
        <div className='w-full h-1/4 py-4 flex items-center justify-start flex-col'>
          <div className={`w-5/6 lg:w-1/3 h-4 lg:h-4 p-1 border-solid border-2 rounded-full ${
          isDarkMode ? "dark:bg-black dark:border-white" : "bg-white border-black"
        }`}>
            <div className={`h-full flex items-center justify-center rounded-full ${
          isDarkMode ? "dark:bg-white" : "bg-black"
        }`} style={{width: `${percentage}%`, transition: 'ease-in-out 11s'}}>
              {/* {`${percentage}%`} */}
            </div>
          </div>
          <div className='my-4'>
            <p>WeTalkSound in the houseeee.</p>
          </div>
        </div>
    </div>
    
  )
}

export default Loadingpage