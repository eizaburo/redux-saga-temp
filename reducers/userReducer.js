const initialSatte = {
    name: 'hoge',
    age: 33
}

const userReducer = (state = initialSatte, action) => {
    switch(action.type){
        case 'UPDATE_NAME':
            console.log(action);
            return Object.assign({}, state, {
                name: action.name
            });
        default:
            return state;
    }
}

export default userReducer;