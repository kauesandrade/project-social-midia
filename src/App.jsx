import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'

import HomePage from './components/homePage'
import ProfilePage from './components/profilePage'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/explore' element={<ProfilePage />}/>
        <Route path='/menssages' element={<ProfilePage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
      </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
