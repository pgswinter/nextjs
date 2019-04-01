import { testRequestActions, testSuccessActions, testFailActions } from '../actions/testActions';
import { call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch'
import axios from 'axios';

export function* fetchTest() {
    try {
        const res  = yield axios.get('https://jsonplaceholder.typicode.com/users')
        yield put(testSuccessActions(res.data))
    } catch (error) {
        yield put(testFailActions())
    }
}