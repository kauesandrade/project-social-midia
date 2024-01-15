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
                <ExplorePost />
            </main>
        </>
    )
}

export default explorePage;