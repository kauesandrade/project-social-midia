import './style.css'
import { PiHouseFill } from "react-icons/pi";
import { PiHouse } from "react-icons/pi";
import { FaHashtag } from "react-icons/fa6";
import { GoHash } from "react-icons/go";
import { FaCommentAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const sidebar = (pros) => {

    const navigate = useNavigate();
    const [isShowMenu, setIsShowMenu] = useState(false);

    const handleClickMenu = () => {
        isShowMenu == false ? setIsShowMenu(true) : setIsShowMenu(false);
    }

    const [selection, setSelection] = useState(pros.page)

    // ====================FAZER UM COMPONENT PARA OS LI===========================
    // ====================FAZER UMA TEXTURA QUANDO ESTIVER NA PAGINA SELECIONADA===========================


    return (
        <>
            <aside className='asideSidebar'>
                <ul className='ulNavBar'>
                    <li className='liNavBar'>
                        <span className='spanPhoto' onClick={() => navigate('/profile')}>
                            <img className='imgNav' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                        </span>
                    </li>
                    <li className='liNavBar'>
                        {selection == 'home' && (
                            <span className='spanIconNav selection' onClick={() => navigate('/')}>
                                <PiHouseFill className='iconsNav' />
                                <a className='aNames'>Home</a>
                            </span>

                        )}
                        {selection != 'home' && (
                            <span className='spanIconNav' onClick={() => navigate('/')}>
                                <PiHouse className='iconsNav' />
                                <a className='aNames'>Home</a>
                            </span>
                        )}
                    </li>
                    <li className='liNavBar'>
                        {selection == 'explore' && (
                            <span className='spanIconNav selection' onClick={() => navigate('/explore')}>
                                <FaHashtag className='iconsNav' />
                                <a className='aNames'>Explore</a>
                            </span>
                        )}
                        {selection != 'explore' && (
                            <span className='spanIconNav' onClick={() => navigate('/explore')} >
                                <GoHash className='iconsNav' />
                                <a className='aNames'>Explore</a>
                            </span>
                        )}

                    </li>
                    <li className='liNavBar'>
                        {selection == 'menssages' && (
                            <span className='spanIconNav selection' onClick={() => navigate('/menssages')}>
                                <FaCommentAlt className='iconsNav' />
                                <a className='aNames'>Menssages</a>
                            </span>
                        )}
                        {selection != 'menssages' && (
                            <span className='spanIconNav'onClick={() => navigate('/menssages')} >
                                <FaRegCommentAlt className='iconsNav' />
                                <a className='aNames'>Menssages</a>
                            </span>
                        )}

                    </li>
                    <li className='liNavBar'>
                        {selection == 'profile' && (
                            <span className='spanIconNav selection' onClick={() => navigate('/profile')}>
                                <IoPerson className='iconsNav' />
                                <a className='aNames'>Profile</a>
                            </span>
                        )}
                        {selection != 'profile' && (
                            <span className='spanIconNav' onClick={() => navigate('/profile')}>
                                <IoPersonOutline className='iconsNav' />
                                <a className='aNames'>Profile</a>
                            </span>
                        )}

                    </li>
                </ul>
            </aside>

            <nav className='navBarMenu'>
                <IoIosMenu onClick={() => handleClickMenu()} style={{ fontSize: '3rem' }} />
                <a className='aMenu'>Menu</a>
            </nav>

            {isShowMenu && (
                <nav className='navBarShow'>
                    <ul className='ulNavBar'>
                        <li className='liNavBar'>
                            <span className='spanIconNav selection' onClick={() => handleClickMenu()}>
                                <IoClose className='iconClose' />
                            </span>
                        </li>
                        <li className='liNavBar'>
                            <span className='spanIconNav selection' onClick={() => { handleClickMenu(); navigate('/') }}>
                                <PiHouse className='iconsNav' />
                                <a>Home</a>
                            </span>
                        </li>
                        <li className='liNavBar'>
                            <span className='spanIconNav selection' onClick={() => { handleClickMenu(); navigate('/explore') }}>
                                <GoHash className='iconsNav' />
                                <a>Explore</a>
                            </span>
                        </li>
                        <li className='liNavBar'>
                            <span className='spanIconNav selection' onClick={() => { handleClickMenu(); navigate('/menssages') }}>
                                <FaRegCommentAlt className='iconsNav' />
                                <a>Menssages</a>
                            </span>
                        </li>
                        <li className='liNavBar'>
                            <span className='spanIconNav selection' onClick={() => { handleClickMenu(); navigate('/profile') }}>
                                <IoPersonOutline className='iconsNav' />
                                <a>Profile</a>
                            </span>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    )
}

export default sidebar;