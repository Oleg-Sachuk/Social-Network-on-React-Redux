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
}

const dialogsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage = {
                id: state.messageData.length,
                message: action.body.NewMessageBody
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            }
        }
        default:
            return state;
    }
}

export const SendMessageCreator = (body) => ({
    type: 'SEND-MESSAGE', body
})

export default dialogsReducer;