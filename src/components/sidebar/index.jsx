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
    const[isShowMenu, setIsShowMenu] = useState(false);
    const[isShowMenuBar, setIsShowMenuBar] = useState(true);

    const handleClickMenu = () =>{
        // isShowMenuBar == false ? setIsShowMenuBar(true) : setIsShowMenuBar(false);
        isShowMenu == false ? setIsShowMenu(true) : setIsShowMenu(false);
    }

    return (
        <>

        <aside className='asideSidebar'>
            <ul>
                <li><span className='spanPhoto' onClick={() =>navigate('/profile')}><img src="src/assets/imagens/profile.jpg" alt="Profile Photo" /></span></li>
                <li><span onClick={() =>navigate('/')}><PiHouse style={{fontSize: '1.5rem'}} /><a id='home'>Home</a></span></li>
                <li><span onClick={() =>navigate('/explore')}><GoHash style={{ fontSize: '1.5rem' }} /><a id='explore'>Explore</a></span></li>
                <li><span onClick={() =>navigate('/menssages')}><FaRegCommentAlt style={{ fontSize: '1.5rem' }} /><a id='menssages'>Menssages</a></span></li>
                <li><span onClick={() =>navigate('/profile')}><IoPersonOutline style={{fontSize: '1.5rem'}} /><a id='profile'>Profile</a></span></li>
            </ul>
        </aside>

        {isShowMenuBar && (
            <nav className='navBarMenu'>
            <IoIosMenu onClick={() =>handleClickMenu()} style={{ fontSize: '3rem' }} />
            <a className='aMenu'>Menu</a>
        </nav>
        )}
        
        

        {isShowMenu && (
        <nav className='navBarShow'>
            <ul>
                <li><span onClick={() =>handleClickMenu()}><IoClose style={{fontSize: '2.5rem'}} /></span></li>
                <li><span onClick={() =>{handleClickMenu(); navigate('/')}}><PiHouse style={{fontSize: '1.5rem'}} /><a id='home'>Home</a></span></li>
                <li><span onClick={() =>{handleClickMenu(); navigate('/explore')}}><GoHash style={{ fontSize: '1.5rem' }} /><a id='explore'>Explore</a></span></li>
                <li><span onClick={() =>{handleClickMenu(); navigate('/menssages')}}><FaRegCommentAlt style={{ fontSize: '1.5rem' }} /><a id='menssages'>Menssages</a></span></li>
                <li><span onClick={() =>{handleClickMenu(); navigate('/profile')}}><IoPersonOutline style={{fontSize: '1.5rem'}} /><a id='profile'>Profile</a></span></li>
            </ul>

            {/* <span onClick={() =>handleClickMenu()}><IoClose style={{fontSize: '1.5rem'}} /></span>
            <span onClick={() =>{handleClickMenu(); navigate('/')}}><FaHouse style={{fontSize: '1.5rem'}} /></span>
            <span onClick={() =>{handleClickMenu(); navigate('/explore')}}><FaHashtag style={{ fontSize: '1.5rem' }} /></span>
            <span onClick={() =>{handleClickMenu(); navigate('/menssages')}}><FaCommentAlt style={{ fontSize: '1.5rem' }} /></span>
            <span onClick={() =>{handleClickMenu(); navigate('/profile')}}><IoPersonSharp style={{fontSize: '1.5rem'}} /></span> */}
        </nav>
        )}
        </>
    )







}

export default sidebar;