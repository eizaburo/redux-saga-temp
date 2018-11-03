import { updateName } from './actions/userAction';
import { call, takeLatest, put, all, takeEvery } from 'redux-saga/effects';

function getData(name){
    const URL = 'http://localhost/saga/getNewName.php?name=' + name;
    return fetch(URL)
        .then(response=>response.json())
        .then(json => {
            const data = json;
            return data;
        })
        .catch(error => console.log(error));
}

function* requestData(action){
    const data = yield call(getData, action.name);
    yield put(updateName(data.new_name));
}

//機能毎にまとめる
const userSogas = [
    takeLatest('REQUEST_NAME', requestData)
    // takeEvery('REQUEST_NAME', getDataAction)
];

//いろいろまとめる
export default function* rootSaga(){
    yield all([
        ...userSogas,
    ]);
}