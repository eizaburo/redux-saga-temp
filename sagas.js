import { updateName } from './actions/userAction';
import { call, fork, takeLatest, put, all } from 'redux-saga/effects';

function getData(){
    const URL = 'http://localhost/';
    return fetch(URL)
        .then(response=>response.json())
        .then(json => {
            const data = json;
            return data;
        })
        .catch(error => console.log(error));
}

function* getDataAction(action){
    const data = yield call(getData, action.name);
    yield put(updateName(data.status));
}

//機能毎にまとめる
const userSogas = [
    takeLatest('UPDATE_NAME', getDataAction)
];

//いろいろまとめる
export default function* rootSaga(){
    yield all([
        ...userSogas,
    ]);
}