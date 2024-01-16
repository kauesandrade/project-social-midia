import './style.css'

import Sidebar from '../../components/sidebar'
import Carousel from '../../components/carousel';
import Highlight from '../../components/highlight';
import Highlights from '../../components/highlights';


import { MdBookmarkBorder } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsFillFilePersonFill } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import { PiSealCheckDuotone } from "react-icons/pi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import Flicking from "@egjs/react-flicking";
import { useState } from 'react';



const profilePage = () => {

    const [isVerify, setIsVerify] = useState(true) //props de verificado 

    const [selection, setSelection] = useState('posts');

    const hadleClickSelection = (selection) => {
        setSelection(selection)
    }

    return (
        <>
            <Sidebar page='profile' />

            <main className='mainProfilePage'>
                <section className='sectionProfileInformations'>
                    {/* Perfil infomacoes */}
                    <div className='divInformationImage'>
                        {/* informacoes e imagem de perfil*/}
                        <div>
                            <img className='imgProfile' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                            {/* imagen de perfil */}
                        </div>
                        <div className='divInformations'>
                            <div className='divProfileNameButtons flex'>
                                <div className='divProfileName flex'>
                                    <p>kauesandrade</p>
                                    {isVerify && (
                                        <PiSealCheckDuotone className='iconVerify' />
                                    )}

                                </div>
                                <div className='divButtons'>
                                    <button className='buttonsProfile'> Seguir </button>
                                    <button className='buttonsProfile'> Enviar Mensagem </button>
                                </div>
                                <div className='flex'>
                                    <BiDotsHorizontalRounded className='iconsPost' />
                                </div>

                            </div>
                            <div className='divProfileCounts flex'>
                                <p><span className='fontBold'>200</span> posts</p>
                                <p><span className='fontBold'>200</span> followers</p>
                                <p><span className='fontBold'>200</span> followings</p>
                            </div>
                            <div className='divProfileDescription'>
                                <div>
                                    <p className='fontBold'>Kaue Andrade</p>
                                </div>
                                <div>
                                    <p>SC🏖️</p>
                                </div>
                            </div>
                            <div>
                                <p>followed by <span className='fontBold'>kauesandrade, daviBiwerk</span> and <span className='fontBold'>22 others</span></p>
                            </div>
                            {/* informacoes */}
                        </div>
                    </div>
                    <div className='divHighlights'>
                        {/* <Highlights /> */}
                        <p>Highlight</p>
                        <div className='divHighlightsComponents'>
                            <Highlight />
                            <Highlight />
                            <Highlight />
                            <Highlight />
                        </div>

                    </div>
                </section>
                <section className='sectionProfilePosts'>
                    {/* publicacoes */}
                    <nav className='navProfilePosts'>
                        {/* navBar */}
                        <div className='divSelectionPosts flex' onClick={() => hadleClickSelection('posts')}>
                            {/* posts */}
                            {selection == 'posts' && (
                                <>
                                    <BsFillGridFill className='iconsPost selection' />
                                    <p className='selection'>Posts</p>
                                </>
                            )}
                            {selection != 'posts' && (
                                <>
                                    <BsGrid className='iconsPost' />
                                    <p>Posts</p>
                                </>
                            )}

                        </div>
                        <div className='divSelectionPosts flex' onClick={() => hadleClickSelection('mentions')}>
                            {/* mention */}
                            {selection == 'mentions' && (
                                <>
                                    <BsFillFilePersonFill className='iconsPost selection' />
                                    <p className='selection'>Mentions</p>
                                </>
                            )}
                            {selection != 'mentions' && (
                                <>
                                    <BsFilePerson className='iconsPost' />
                                    <p>Mentions</p>
                                </>
                            )}

                        </div>
                        <div className='divSelectionPosts flex' onClick={() => hadleClickSelection('saves')}>
                            {/* saves */}
                            {selection == 'saves' && (
                                <>
                                    <MdOutlineBookmark className='iconsPost selection' />
                                    <p className='selection'>Saves</p>
                                </>
                            )}
                            {selection != 'saves' && (
                                <>
                                    <MdBookmarkBorder className='iconsPost' />
                                    <p>Saves</p>
                                </>
                            )}

                        </div>
                    </nav>
                    <div>
                        {selection == 'posts' && (
                            <div className='divAllPosts'>
                                <div className='divPartPosts'>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className='divPartPosts'>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className='divPartPosts'>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                    <div className='divPost'>
                                        <FaHeart className='iconsPost iconHeart' />
                                        <Carousel
                                            srcPhotos={['src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg',
                                                'src/assets/imagens/profile.jpg'
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {selection == 'mentions' && (
                            <>
                                <p>mentions</p>
                            </>
                        )}
                        {selection == 'saves' && (
                            <>
                                <p>saves</p>
                            </>
                        )}
                        {/* grid posts */}
                    </div>
                </section>
            </main>

        </>
    )
}

export default profilePage;