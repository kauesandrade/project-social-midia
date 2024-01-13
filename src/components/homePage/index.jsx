import './style.css'

import Sidebar from '../sidebar/index'
import Post from '../post/index'

const homePage = () => {

    return (
        <>
            <Sidebar />
            <main className='mainHomePage'>
                <Post 
                profilePhoto='src/assets/imagens/profile.jpg'
                username='andrade.carlosra'
                timePost='19m'
                likes={109}
                commentsCount={10}
                description='eeee'
                srcPhotos={['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']}    
                />
            </main>

        </>
    )
}

export default homePage;