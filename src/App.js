import React from 'react'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import Rating from './components/Rating'
import MagicWand from './components/MagicWand'
import Apply from './components/Apply'
import Support from './components/Support'
import Features from './components/Features'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-full bg-[#0e0e1b]'>
    <div className='px-36 max-lg:px-6'>
      <Header/>
      <LandingPage/>
      <Rating/>
      <MagicWand/>
      <Apply/>
      <Support/>
      <Features/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default App