
const Loadingpage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black text-black">
      <img className='w-40 h-auto object-cover absolute inset-1/2 z-30' src={process.env.PUBLIC_URL + `/assets/images/loading-image-1.svg`} alt='' />
      <img className='w-40 h-auto object-cover absolute inset-1/3 z-20' src={process.env.PUBLIC_URL + `/assets/images/loading-image-2.svg`} alt='' />
      <img className='w-40 h-auto object-cover absolute inset-1/2 z-10' src={process.env.PUBLIC_URL + `/assets/images/loading-image-3.svg`} alt='' />
      <img className='w-42 h-auto object-cover absolute inset-1/7 z-50' src={process.env.PUBLIC_URL + `/assets/images/loading-image-4.svg`} alt='' />
      <img className='w-40 h-auto object-cover absolute inset-1/3 z-40' src={process.env.PUBLIC_URL + `/assets/images/loading-image-5.svg`} alt='' />
    </div>
  )
}

export default Loadingpage