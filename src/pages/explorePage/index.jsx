import './style.css';

import Sidebar from '../../components/sidebar'
import ProfilePosts from '../../components/profliePosts';

const explorePage = () => {

    return (
        <>
            <Sidebar page = 'explore'/>
            <main className='mainExplorePage'>

                <ProfilePosts 
                srcs = {[
                    ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                    ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                    ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                    ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                    ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                    ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                    ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']
                    ]}
                

                
                />

            </main>
        </>
    )
}

export default explorePage;