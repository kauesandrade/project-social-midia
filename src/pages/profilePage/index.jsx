import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../../components/sidebar'
// import Highlight from '../../components/testing/highlight';
// import Highlights from '../../components/testing/highlights';
import SmallPosts from '../../components/smallPosts';
import NavbarProfile from '../../components/navbarProfile';

// import useProfileData from '../../hooks/useProfileData';

import metadata from '../../storage.metadata.json';

import { PiSealCheckDuotone } from "react-icons/pi";
import { BiDotsHorizontalRounded } from "react-icons/bi";



const profilePage = () => {

    const [profile, setProfile] = useState({});
    const [id, setId] = useState();

    useEffect(() => {
        axios.get(metadata.API.API_URL + "/profile/1").then((response) => setProfile(response.data))
    }, []);

    // const [isVerify, setIsVerify] = useState() //props de verificado 

    const [selection, setSelection] = useState('posts');

    const hadleClickSelection = (selection) => {
        setSelection(selection)
    }

    return (
        <>
            <Sidebar page='profile' />

            <main className='mainProfilePage'>
                <section className='sectionProfileInformations'>
                    <div className='divInformationImage'>
                        <div className='divProfileNameButtons flex topProfileName'>
                            <div className='divProfileName flex'>
                                <p>{profile?.name}</p>
                                {profile?.verified && (
                                    <PiSealCheckDuotone className='iconVerify' />
                                )}
                            </div>
                            <div className='divButtons flex'>
                                <button className='buttonsProfile'> Follow </button>
                                <button className='buttonsProfile'> Send a Menssage </button>
                                <BiDotsHorizontalRounded className='iconsPost' />
                            </div>
                        </div>
                        <div>
                            <img className='imgProfile' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                        </div>
                        <div className='divInformations'>
                            <div className='divProfileNameButtons flex buttonProfileName'>
                                <div className='divProfileName flex'>
                                    <p>{profile?.name}</p>
                                    {profile?.verified && (
                                        <PiSealCheckDuotone className='iconVerify' />
                                    )}

                                </div>
                                <div className='divButtons'>
                                    <button className='buttonsProfile'> Follow </button>
                                    <button className='buttonsProfile'> Send a Menssage </button>
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
                        </div>
                    </div>
                    {/* <div className='divHighlights'>
                        <p>Highlight</p>
                        <div className='divHighlightsComponents'>
                            <Highlight />
                            <Highlight />
                            <Highlight />
                            <Highlight />
                            <Highlight />
                            <Highlight />
                        </div>

                    </div> */}
                </section>
                <section className='sectionProfilePosts'>
                    
                    <NavbarProfile 
                    selection = {selection}
                    hadleClickSelection = {hadleClickSelection}
                    />

                    <div>

                        {selection == 'posts' && (

                            <SmallPosts srcs = {[
                            ['src/assets/imagens/img1.jpeg', 'src/assets/imagens/img2.jpeg'],
                            ['src/assets/imagens/img5.jpeg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']
                            ]} />

                        )}

                        {selection == 'mentions' && (
                            
                            <SmallPosts srcs = {[
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']
                            ]} />

                        )}

                        {selection == 'saves' && (
                           
                           <SmallPosts srcs = {[
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg'],
                            ['src/assets/imagens/profile.jpg', 'src/assets/imagens/profile.jpg']
                            ]} />

                        )}
                        
                    </div>
                </section>
            </main>

        </>
    )
}

export default profilePage;