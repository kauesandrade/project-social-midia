import './style.css';

import { IoNotificationsOffOutline } from "react-icons/io5";

const conversationSelection = ({srcProfileImg, profileName, status, selection, changeSelection, muted}) => {

    const handleClickConversation = () =>{
        changeSelection()
    }

    return (

        <div className={selection} onClick={ () => handleClickConversation()}>
            <div className='divItensConversations'>
                <div className='divConversationsImgName'>
                    <img className='imgConversationsProfile' src= {srcProfileImg} alt="Profile Photo" />
                    <div>
                        <p>{profileName}</p>
                        <p className='pConvesationStatus'>{status}</p>
                    </div>
                </div>

                <div>
                    {muted &&
                    <IoNotificationsOffOutline />
                    }
                </div>
            </div>
        </div>

    )

}

export default conversationSelection;