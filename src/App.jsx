import {  useState } from 'react'
import React from 'react'
import Navbar from './Components/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SearchResult from './Pages/SearchResult'
import AnimeDetails from './Pages/AnimeDetails'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Trending from './Pages/Trending'
import TopRated from './Pages/TopRated'
import Profile from './Pages/Profile'

function App() {

  return (
    <>
    <div>
        {/* Navbar */}
  <Navbar />
  <main>
  {/* Routes */}
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path='/anime/:id' element={<AnimeDetails />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path='/profile' element={<Profile />} />
      </Routes></main>
<div>
      <Footer className="absolute bottom-0 left-0"/>
    </div>
    </div>
</>


  )
}

export default App
