import './style.css'

import Sidebar from '../sidebar/index'
import Post from '../post/index'

const homePage = () => {

    return (
        <>
            <Sidebar />
            <main className='mainHomePage'>
                <Post />
            </main>

        </>
    )
}

export default homePage;