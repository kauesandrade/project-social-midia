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

    const [cu, setCu] = useState()
    const [divs, setDivs] = useState([])
    const [div, setDiv] = useState([])

    useEffect(() => {



        const divPost = postsData.map((src, key) => {

            setDiv([...div, 
                <div className='divPost' key={key}>
                    <FaHeart className='iconsPost iconHeart' />
                    <Carousel srcPhotos={src.srcPhotos} />
                </div>
            ])

            if (key % 3 == 0) {
                setDivs(div)
                setDiv([])
            }
        })

        setCu(divs.map((divs, key) => {

            if (key % 3 == 0) {
                return (
                    <div className='divPartPosts' key={key}>
                        {divs}
                    </div>
                )
            }
        }))

    }, []);



    return (
        <>
            <div className='divAllPosts'>
                {cu}
            </div>

        </>
    )
}

export default profilePosts;