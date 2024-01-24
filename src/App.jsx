import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homePage';
import ExplorePage from './pages/explorePage';
import MenssagePage from './pages/menssagePage';
import ProfilePage from './pages/profilePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/menssages' element={<MenssagePage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
