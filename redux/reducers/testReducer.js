import { TEST_REQUEST, TEST_SUCCESS, TEST_FAIL } from '../action_types/test';

const initialState = {
    loading: false,
    success: false,
    data: [],
}

export const testReducer = (state = initialState, action) => {
    switch(action.type) {
        case TEST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case TEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                success: true
            }
        case TEST_FAIL:
            return {
                ...state,
                success: false,
                loading: false
            }    
        default:
            return state
    }
        
}