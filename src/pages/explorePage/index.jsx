import './style.css';
import Sidebar from '../../components/sidebar'
import Carousel from '../../components/carousel';
import ExplorePost from '../../components/explorePost';

const explorePage = () =>{

    return(
        <>
            <Sidebar />
            <main className='mainExplorePage'>


                <ExplorePost />


                <Carousel srcPhotos={['src/assets/imagens/img1.jpeg', 
        'src/assets/imagens/img2.jpeg', 
        'src/assets/imagens/img3.jpeg', 
        'src/assets/imagens/img4.jpeg', 
        'src/assets/imagens/img5.jpeg', 
        'src/assets/imagens/img6.jpeg', 
        'src/assets/imagens/img7.jpeg', 
        'src/assets/imagens/img8.jpeg']} />
            </main>
        </>
    )
}

export default explorePage;