import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'

import HomePage from './pages/homePage'
import ProfilePage from './pages/profilePage'
import ExplorePage from './pages/explorePage';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/explore' element={<ExplorePage />}/>
        <Route path='/menssages' element={<ProfilePage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
