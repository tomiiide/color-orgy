import React from 'react'
import GridLayout from '../../components/gridLayout/GridLayout'
import Header from '../../components/header/Header'

const Homepage = () => {
  return (
    <div className='h-screen overflow-x-hidden'>
        <Header />
        <div className='w-screen'>
            <GridLayout />
        </div>
    </div>
  )
}

export default Homepage