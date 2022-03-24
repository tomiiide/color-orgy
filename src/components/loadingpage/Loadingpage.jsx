
const Loadingpage = ({ isDarkMode }) => {
  return (
    <div className={`w-screen h-screen flex items-center justify-center ${
      isDarkMode ? "dark:bg-black dark:text-white" : "bg-white text-black"
    }`}>
      <img className='w-50 h-auto object-cover absolute top-[38%] right-[38%] bg:top-[35%] bg:right-[38%] z-30' src={process.env.PUBLIC_URL + `/assets/images/loading-image-1.svg`} alt='' />
      <img className='w-42 h-auto object-cover absolute top-[27%] left-[36%] bg:top-[27%] bg:left-[36%] z-10' src={process.env.PUBLIC_URL + `/assets/images/loading-image-2.svg`} alt='' />
      <img className='w-40 h-auto object-cover absolute top-[27%] right-[36%] bg:top-[30%] bg:right-[35%] z-20' src={process.env.PUBLIC_URL + `/assets/images/loading-image-3.svg`} alt='' />
      <img className='w-42 h-auto object-cover absolute top-[15%] right-[43%] bg:top-[15%] bg:right-[43%] z-50' src={process.env.PUBLIC_URL + `/assets/images/loading-image-4.svg`} alt='' />
      <img className='w-44 h-auto object-cover absolute top-[50%] left-[40%] bg:top-[50%] bg:left-[40%] z-40' src={process.env.PUBLIC_URL + `/assets/images/loading-image-5.svg`} alt='' />
    </div>
  )
}

export default Loadingpage