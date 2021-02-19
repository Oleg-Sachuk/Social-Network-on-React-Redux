import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id:0, message:"Hi how are you?", likes:15},
                {id:1, message:"It's my first post!", likes:20}
            ],
            newPostText: ''
        },
        dialogPage: {
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
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log("state changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);

    }
}

window.store = store;

export default store;

// addPost() {
//     let newPost = {
//         id: this._state.profilePage.postData.length,
//         message: this._state.profilePage.newPostText,
//         likes: 0
//     };
//     this._state.profilePage.postData.push(newPost);
//     this._state.profilePage.newPostText = "";
//     this._callSubscriber(this._state);
// },
// updatePostText(NewText) {
//     this._state.profilePage.newPostText = NewText;
//     this._callSubscriber(this._state);
// },