import './style.css'

import Sidebar from '../../components/sidebar';
import SidebarConversations from '../../components/sidebarConversations';

import { IoNotificationsOffSharp } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiFillExclamationCircle } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import { FaArrowLeftLong } from "react-icons/fa6";

const menssagePage = () => {

    return (
        <>
            <Sidebar page='menssages' />
            <main className='mainMenssagePage'>

                <SidebarConversations />

                <section className='sectionConversation'>


                    <header className='headerConversaiton'>
                        {/* NAME IN TOP */}
                        <div className='divTopItensConversation'>
                            <div className='divConversationsImgName'>
                                {/* <FaArrowLeftLong className='iconTopConversation '/> */}
                                <img className='imgTopConversationProfile' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                                <div>
                                    <p>Kaue Andrade</p>
                                    <p className='pConvesationStatus'>Active 1h ago </p>
                                </div>
                            </div>

                            <div className='divTopIcons'>
                                <IoNotificationsOffSharp className='iconTopConversation' />
                                <IoNotificationsOutline className='iconTopConversation' />
                                <AiFillExclamationCircle className='iconTopConversation' />
                                <AiOutlineExclamationCircle className='iconTopConversation' />
                            </div>
                        </div>
                    </header>


                    <div className='divConversation'>
                        {/* conversation */}

                        <div className='divPersonMenssage'>
                            <div>
                                <img className='imgProfileMenssage' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                            </div>
                            <div className='divMenssage'>
                                <p>cu</p>
                            </div>

                        </div>



                        <div className='divTimeMenssage'>
                            <p>04/10/23, 18:37</p>
                        </div>



                        <div className='divPersonMenssage'>
                            <div>
                                <img className='imgProfileMenssage' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                            </div>
                            <div className='divMenssage cuzin'>
                                <p>cusssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                            </div>
                        </div>



                        <div className='divMyMenssage'>
                            <p className='divMenssage'>dasdasdasdasd vdd</p>
                        </div>



                    </div>

                    <div className='divInputMenssage'>
                        <input type="text" />

                    </div>


                </section>
            </main>
        </>
    )

}

export default menssagePage;