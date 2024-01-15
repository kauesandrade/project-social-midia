import './style.css'
import Sidebar from '../../components/sidebar'
import Highlight from '../../components/highlight';
import Highlights from '../../components/highlights';

import Flicking from "@egjs/react-flicking";

import { PiSealCheckDuotone } from "react-icons/pi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from 'react';

const profilePage = () => {

    const [isVerify, setIsVerify] = useState(true) //props de verificado 

    return (
        <>
            <Sidebar />
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
                        <Highlights />
                    </div>
                </section>
                <section>
                    {/* publicacoes */}
                </section>
            </main>

        </>
    )
}

export default profilePage;