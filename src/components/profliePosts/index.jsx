import './style.css'

import Carousel from '../carousel'
import { FaHeart } from "react-icons/fa6";
import { useState, useEffect } from 'react';

const profilePosts = () => {

    const postsData = [
        { srcPhotos: ['src/assets/imagens/profile.jpg'] },
        { srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'] },
        { srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'] },
        { srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'] },
        { srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'] },
        { srcPhotos: ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'] },
    ]

    const divPost = postsData.map((src, key) => {

        return (
            <div className='divPost' key={key}>
                <FaHeart className='iconsPost iconHeart' />
                <Carousel srcPhotos={src.srcPhotos} />
            </div>
        )
    })

    const [cuza, setCuza] = useState([])

    const set = divPost.map((divPost, key) => {

        setCuza(divPost)

        return (

            {cuza}
    
        )
    })


    const divPartPosts = set.map((set, key) => {

        return (
            <div className='divPartPosts' key={key}>
                {set}
            </div>
        )
    })

    // const divPartPosts = divPost.map((divPost, key) => {

    //     if (key % 3 == 0) {
    //         return (
    //             <div className='divPartPosts' key={key}>
    //                 {divPost}
    //             </div>
    //         )
    //     }
    // })

    return (
        <>
            <div className='divAllPosts'>
                {divPartPosts}
            </div>

        </>
    )
}

export default profilePosts;