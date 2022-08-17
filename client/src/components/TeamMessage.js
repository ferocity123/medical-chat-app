import React from 'react';
import { MessageTeam, useMessageContext } from 'stream-chat-react';

const TeamMessages = () => {
    const { handleOpenThread, message } = useMessageContext();

    return (
        <MessageTeam
            message={{ ...message, user: {}}}
            // handleOpenThread={}
        />
    )
}

export default TeamMessages


// import React from 'react';
// import { MessageTeam, useMessageContext } from 'stream-chat-react';

// const MessageTeam = () => {
//     const { handleOpenThread, message } = useMessageContext();

//     return (
//         <cMessageTeam
//             message={{ ...message, user: {}}}
//             // handleOpenThread={}
//         />
//     )
// }

// export default MessageTeam