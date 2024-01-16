import './style.css';
import Sidebar from '../../components/sidebar'
import Carousel from '../../components/carousel';
import ExplorePost from '../../components/explorePost';

"use client";

import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
    {
        alt: "Image1's alt text",
        caption: "Cuzin",
        src: "src/assets/imagens/img1.jpeg",
    },
    {
        alt: "Image2's alt text",
        caption: "Image2's description",
        src: "src/assets/imagens/img2.jpeg",
    },
    {
        alt: "Image3's alt text",
        caption: "Image3's description",
        src: "src/assets/imagens/img3.jpeg",
    },
];

const explorePage = () => {

    return (
        <>
            <Sidebar page = 'explore'/>
            <main className='mainExplorePage'>

                <ImageGallery
                    imagesInfoArray={imagesArray}
                    columnWidth={230}
                    gapSize={24}
                />
                
                {/* <div className='mainExplore'>
                <ExplorePost />
                <ExplorePost />
                </div> */}

            </main>
        </>
    )
}

export default explorePage;