import { TEST_REQUEST, TEST_SUCCESS, TEST_FAIL } from '../action_types/test';

export const testRequestActions = payload => {
    return {
        type: TEST_REQUEST,
        payload
    }
}

export const testSuccessActions = payload => ({
    type: TEST_SUCCESS,
    payload
})

export const testFailActions = payload => ({
    type: TEST_FAIL,
    payload
})