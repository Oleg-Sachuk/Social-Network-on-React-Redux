import profileReducer, { AddPostActionCreator } from "./profile-reducer";

let state = {
    postData: [
        {id:0, message:"Hi how are you?", likes:15},
        {id:1, message:"It's my first post!", likes:20}
    ],
    profile: null,
    status: ""
}

test('new post should be added', () => {
    let action = AddPostActionCreator("Text for testing");
    let newState = profileReducer(state,action);

    //expectation 
    expect(newState.postData.length).toBe(3);
});

test('message of new post should be added', () => {
    let action = AddPostActionCreator("Text for testing");
    let newState = profileReducer(state,action);

    //expectation 
    expect(newState.postData[0].message).toBe("Text for testing");
});
