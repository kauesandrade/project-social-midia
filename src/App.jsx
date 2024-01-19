import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homePage';
import ExplorePage from './pages/explorePage';
import MenssagePage from './pages/menssagePage';
import ProfilePage from './pages/profilePage';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/explore' element={<ExplorePage />}/>
        <Route path='/menssages' element={<MenssagePage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
