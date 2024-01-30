import './style.css';

import ConversationSelection from '../conversationSelection';

import { useEffect, useState } from 'react';

const sidebarConversations = () => {

    const [conversationsData, setConversationsData] = useState([
        {srcProfileImg: "src/assets/imagens/profile.jpg", profileName: 'Kaue Andrade', status: 'Active 1h ago', selection: 'noSelectionConversation', muted: false},
        {srcProfileImg: "src/assets/imagens/profile.jpg", profileName: 'Kaue Andrade', status: 'Me: lets go?', selection: 'noSelectionConversation', muted: true},
        {srcProfileImg: "src/assets/imagens/profile.jpg", profileName: 'Kaue Andrade', status: 'Send 6h ago', selection: 'noSelectionConversation', muted: false},
        {srcProfileImg: "src/assets/imagens/profile.jpg", profileName: 'Kaue Andrade', status: 'Online', selection: 'noSelectionConversation', muted: false}
    ])

    const [selectionConversation, setSelectionConversation] = useState(-1);

    useEffect(()=>{

        setConversationsData(conversationsData.map((conversation, key) =>{
            selectionConversation == key ? conversation.selection = 'selectionConversation' : conversation.selection = 'noSelectionConversation';
            return(conversation)
        }))

    }, [selectionConversation])


    const changeSelection = (key) => setSelectionConversation(key)


    const conversations = conversationsData.map((conversation, key) =>

        <ConversationSelection

        key= {key}
        
        changeSelection={() => changeSelection(key)}
        srcProfileImg= {conversation.srcProfileImg}
        profileName= {conversation.profileName}
        status= {conversation.status}
        selection= {conversation.selection}
        muted={conversation.muted}
        />
    )

    return (

        <section className='sectionAllConversation'>

        {conversations}

        </section>

    )
}

export default sidebarConversations;