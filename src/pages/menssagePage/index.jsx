import './style.css'

import Sidebar from '../../components/sidebar';

import { IoNotificationsOffOutline } from "react-icons/io5";
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
                <section className='sectionSelectConversation'>
                    {/* conversations */}
                    <div className='divConversations'>
                        <div className='divItensConversations'>
                            <div className='divConversationsImgName'>
                                <div><img className='imgConversationsProfile' src="src/assets/imagens/profile.jpg" alt="Profile Photo" /></div>
                                <div>
                                    <p>Kaue Andrade</p>
                                    <p className='pConvesationStatus'>Me: let's to day?</p>
                                </div>
                            </div>

                            <div>
                                {/* can be a icon mute */}
                            </div>
                        </div>
                    </div>
                    <div className='divConversations'>
                        <div className='divItensConversations'>
                            <div className='divConversationsImgName'>
                                <div><img className='imgConversationsProfile' src="src/assets/imagens/profile.jpg" alt="Profile Photo" /></div>
                                <div>
                                    <p>Kaue Andrade</p>
                                    <p className='pConvesationStatus'>Send 3h ago</p>
                                </div>
                            </div>

                            <div>
                                {/* can be a icon mute */}
                                <span className='spanNotification'>•</span>
                            </div>
                        </div>
                    </div>
                    <div className='divConversations'>
                        <div className='divItensConversations'>
                            <div className='divConversationsImgName'>
                                <div><img className='imgConversationsProfile' src="src/assets/imagens/profile.jpg" alt="Profile Photo" /></div>
                                <div>
                                    <p>Kaue Andrade</p>
                                    <p className='pConvesationStatus'>Active 1h ago </p>
                                </div>
                            </div>

                            <div>
                                {/* can be a icon mute */}
                                <IoNotificationsOffOutline />
                            </div>
                        </div>
                    </div>
                    <div className='divConversations selectionConversation'>
                        <div className='divItensConversations'>
                            <div className='divConversationsImgName'>
                                <img className='imgConversationsProfile' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                                <div>
                                    <p>Kaue Andrade</p>
                                    <p className='pConvesationStatus'>Active 1h ago </p>
                                </div>
                            </div>

                            <div>
                                {/* can be a icon mute */}
                                <IoNotificationsOffOutline />
                            </div>
                        </div>
                    </div>
                </section>
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



                        <div className='divPersonMensagem'>
                            <div>
                                <img className='imgProfileMenssage' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                            </div>
                            <div className='divMenssage'>
                                <p>cu</p>
                            </div>

                        </div>



                        <div className='divTimeMensagem'>
                            <p>04/10/23, 18:37</p>
                        </div>



                        <div className='divPersonMensagem'>
                            <div>
                                <img className='imgProfileMenssage' src="src/assets/imagens/profile.jpg" alt="Profile Photo" />
                            </div>
                            <div className='divMenssage cuzin'>
                                <p>cusssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                            </div>
                        </div>



                        <div className='divMyMensagem'>
                            <p className='divMenssage'>dasdasdasdasd vdd</p>
                        </div>



                    </div>
                </section>
            </main>
        </>
    )

}

export default menssagePage;