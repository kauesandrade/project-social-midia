import './style.css';

import Sidebar from '../../components/sidebar'
import SmallPosts from '../../components/smallPosts';
import OpenPost from '../../components/_tests_/openPost';

const explorePage = () => {

    return (
        <>
        
            <OpenPost />

            <Sidebar page='explore' />
            <main className='mainExplorePage'>
                <div>
                    <SmallPosts
                        srcs={[
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']
                        ]}
                    />
                </div>
            </main>
        </>
    )
}

export default explorePage;