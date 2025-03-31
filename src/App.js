import React from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom';
import LandingPages from './stores/pages/LandingPages'
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import AcPage from './stores/pages/AcPage';
import BookPage from './stores/pages/BookPage';
import FridgePage from './stores/pages/FridgePage';
import FurniturePage from './stores/pages/FurniturePage';
import WatchPage from './stores/pages/WatchPage';
import WomanPage from './stores/pages/WomanPage';
import MenPage from './stores/pages/MenPage';
import SpeakerPage from './stores/pages/SpeakerPage';
import TvPage from './stores/pages/TvPage';
import KitchenPage from './stores/pages/KitchenPage';
import MobileSingle from './Singles/MobileSingle';
import AcSingle from './Singles/AcSingle';
import BookSingle from './Singles/BookSingle';
import ComputerSingle from './Singles/ComputerSingle';
import FridgeSingle from './Singles/FridgeSingle';
import FurnitureSingle from './Singles/FurnitureSingle';
import KitchenSingle from './Singles/KitchenSingle';
import MenSingle from './Singles/MenSingle';
import SpeakerSingle from './Singles/SpeakerSingle';
import TvSingle from './Singles/TvSingle';
import WatchSingle from './Singles/WatchSingle';
import WomanSingle from './Singles/WomanSingle';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPages />}/>
        <Route path='/kitchen' element={<KitchenPage />}/>
        <Route path='/mobile' element={<MobilePage />}/>
        <Route path='/computer' element={<ComputerPage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/book' element={<BookPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/watch' element={<WatchPage />} />
        <Route path='/women' element={<WomanPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/speaker' element={<SpeakerPage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/mobile/:id' element={<MobileSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/book/:id' element={<BookSingle />} />
        <Route path='/computer/:id' element={<ComputerSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/speaker/:id' element={<SpeakerSingle />} />
        <Route path='/tv/:id' element={<TvSingle />} />
        <Route path='/watch/:id' element={<WatchSingle />} />
        <Route path='/woman/:id' element={<WomanSingle />} />

      {/* <LandingPages /> */}
      </Routes> 
    </div>
  )
}

export default App
