import {createStore} from "redux";

const HIRE_ME = 'HIRE-ME'
const BACK_HIRE_ME = 'BACK-HIRE-ME'
let initialState = {
    isHireMe: false
}

const hiredReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIRE_ME:
            state.isHireMe = true
            return state
        case BACK_HIRE_ME:
            state.isHireMe = false
            return state
        default:
            return state
    }
}

export const hireMeActionCreator = () => ({
    type: HIRE_ME
})
export const backHireMeActionCreator = () => ({
    type: BACK_HIRE_ME
})

let store = createStore(hiredReducer)

export default store;