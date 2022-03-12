import React, { useState } from 'react'
import GridLayout from '../../components/gridLayout/GridLayout'
import Header from '../../components/header/Header'

const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode)
  return (
    <div className={`h-screen overflow-x-hidden ${isDarkMode ? 'dark:bg-black dark:text-white' : ''}`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className='w-screen'>
            <GridLayout />
        </div>
    </div>
  )
}

export default Homepage