import './style.css';

import { IoNotificationsOffOutline } from "react-icons/io5";

const conversationSelection = (props) => {

    const handleClickConversation = () =>{
        {props.changeSelection()}
    }

    return (

        <div className={props.selection} onClick={ () => handleClickConversation()}>
            <div className='divItensConversations'>
                <div className='divConversationsImgName'>
                    <img className='imgConversationsProfile' src={props.srcProfileImg} alt="Profile Photo" />
                    <div>
                        <p>{props.profileName}</p>
                        <p className='pConvesationStatus'>{props.status}</p>
                    </div>
                </div>

                <div>
                    {/* can be a icon mute */}
                    <IoNotificationsOffOutline />
                </div>
            </div>
        </div>

    )

}

export default conversationSelection;