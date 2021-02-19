let initialstate = {
    dialogData: [
        {id:0, name:"Oleg"},
        {id:1, name:"Valik"},
        {id:2, name:"Sanek"},
        {id:3, name:"Viktor"},
        {id:4, name:"Valery"},
        {id:5, name:"Artur"},
        {id:6, name:"Nathan"},
    ],
    messageData: [
        {id:0, message:"Hello!"},
        {id:1, message:"How are you?"},
        {id:2, message:"You're special!"},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage = {
                id: state.messageData.length,
                message: state.newMessageBody
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageBody: ""
            }
        }
        case 'UPDATE-NEW-MESSAGE': {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default:
            return state;
    }
}

export const SendMessageCreator = () => ({
    type: 'SEND-MESSAGE'
})

export const UpdateMessageBodyCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE', body: text
})

export default dialogsReducer;