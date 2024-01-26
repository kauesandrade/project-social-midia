import './style.css'

import Carousel from '../carousel';

const openPost = () =>{
    <main className='mainOpenPost'>
        <div>
            <section>
                {/* Carousel */}

                <Carousel srcPhotos= {['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']} />

            </section>
            <section>
                {/* Comments */}
            </section>
        </div>
    </main>
}

export default openPost;