import './style.css'
import Sidebar from '../sidebar/index'

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



const profilePage = () => {

    // const swiper = new Swiper(...);
    return (
        <>
            <Sidebar />
            <main className='mainProfilePage'>
                <h1>Profile</h1>
            </main>

        </>
    )
}

export default profilePage;