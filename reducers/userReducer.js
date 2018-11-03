const initialSatte = {
    name: 'hoge',
    age: 33
}

const userReducer = (state = initialSatte, action) => {
    switch(action.type){
        case 'UPDATE_NAME':
            // const newState = Object.assign({},state);
            // newState.name = action.name;
            // return newState;
            return Object.assign({}, state, {
                name: action.name
            });
        case 'REQUEST_NAME': //別にいらない
            return state;
        default:
            return state;
    }
}

export default userReducer;