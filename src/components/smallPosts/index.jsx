import './style.css'

import Carousel from '../carousel'
import { FaHeart } from "react-icons/fa6";

const smallPost = (props) => {

    const divPost = props.srcs.map((src, key) => {

        return (
            <div className='divPost' key={key}>
                <FaHeart className='iconsPost iconHeart' />
                <Carousel srcPhotos={src} />
            </div>
        )
    })

    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
    );

    const divPartsPosts = chunk(divPost, 3).map((division, key) => {
        return (
            <div className='divPartPosts' key={key}>
                {division}
            </div>
        )
    })

    return (
        <>
            <div className='divAllPosts'>
                {divPartsPosts}
            </div>

        </>
    )
}

export default smallPost;