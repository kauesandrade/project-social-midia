import './style.css'
import { PiHouse } from "react-icons/pi";
import { GoHash } from "react-icons/go";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const sidebar = () => {

    const navigate = useNavigate();
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowMenuBar, setIsShowMenuBar] = useState(true);

    const handleClickMenu = () => {
        isShowMenuBar == false ? setIsShowMenuBar(true) : setIsShowMenuBar(false);
        isShowMenu == false ? setIsShowMenu(true) : setIsShowMenu(false);
    }

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
                    {/* <li className='liNavBarI'> */}
                    <li className='liNavBar'>
                        <span className='spanIconNav' onClick={() => navigate('/')}>
                            <PiHouse className='iconsNav' />
                            <a id='home'>Home</a>
                        </span>
                    </li>
                    <li className='liNavBar'>
                        <span className='spanIconNav' onClick={() => navigate('/explore')}>
                            <GoHash className='iconsNav' />
                            <a id='explore'>Explore</a>
                        </span>
                    </li>
                    <li className='liNavBar'>
                        <span className='spanIconNav' onClick={() => navigate('/menssages')}>
                            <FaRegCommentAlt className='iconsNav' />
                            <a id='menssages'>Menssages</a>
                        </span>
                    </li>
                    <li className='liNavBar'>
                        <span className='spanIconNav' onClick={() => navigate('/profile')}>
                            <IoPersonOutline className='iconsNav' />
                            <a id='profile'>Profile</a>
                        </span>
                    </li>
                </ul>
            </aside>

            {isShowMenuBar && (
                <nav className='navBarMenu'>
                    <IoIosMenu onClick={() => handleClickMenu()} style={{ fontSize: '3rem' }} />
                    <a className='aMenu'>Menu</a>
                </nav>
            )}

            {isShowMenu && (
                <nav className='navBarShow'>
                    <ul className='ulNavBar'>
                        <li className='liNavBar'>
                            <span className='spanIconNav' onClick={() => handleClickMenu()}>
                                <IoClose className='iconClose' />
                            </span>
                        </li>
                        <li className='liNavBar'>
                            <span className='spanIconNav' onClick={() => { handleClickMenu(); navigate('/') }}>
                                <PiHouse className='iconsNav' />
                                <a id='home'>Home</a>
                            </span>
                        </li>
                        <li className='liNavBar'>
                            <span className='spanIconNav' onClick={() => { handleClickMenu(); navigate('/explore') }}>
                                <GoHash className='iconsNav' />
                                <a id='explore'>Explore</a>
                            </span>
                        </li>
                        <li className='liNavBar'>
                            <span className='spanIconNav' onClick={() => { handleClickMenu(); navigate('/menssages') }}>
                                <FaRegCommentAlt className='iconsNav' />
                                <a id='menssages'>Menssages</a>
                            </span>
                        </li>
                        <li className='liNavBar'>
                            <span className='spanIconNav' onClick={() => { handleClickMenu(); navigate('/profile') }}>
                                <IoPersonOutline className='iconsNav' />
                                <a id='profile'>Profile</a>
                            </span>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    )
}

export default sidebar;