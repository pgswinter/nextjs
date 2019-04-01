import { takeLatest, all } from 'redux-saga/effects';
import { TEST_REQUEST } from '../action_types/test';
import { fetchTest } from './testSagas';

export default function* rootSaga() {
    yield all([
        yield takeLatest(TEST_REQUEST, fetchTest),
    ])
}