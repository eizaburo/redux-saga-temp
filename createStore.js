import {
    createStore as reduxCreateStore,
    combineReducers,
    compose,
    applyMiddleware
} from "redux";
import createSagaMiddleware from 'redux-saga'
import userReducer from "./reducers/userReducer";


export default function createStore(){

    const sagaMiddleware = createSagaMiddleware();

    const store = reduxCreateStore(
        combineReducers({
            appData: userReducer,
        }),
        applyMiddleware(
            sagaMiddleware,
        )
    );

    // sagaMiddleware.run(rootSaga);
    
    return store;
}