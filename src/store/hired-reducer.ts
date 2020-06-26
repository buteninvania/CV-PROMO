const HIRE_ME = 'HIRE-ME'
const BACK_HIRE_ME = 'BACK-HIRE-ME'

type InitialStateType = {
    isHireMe: boolean
}
let initialState: InitialStateType = {
    isHireMe: false
}

const hiredReducer = (state = initialState, action: HiredMeActionTypes): InitialStateType => {
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
type HiredMeActionTypes = HireMeActionCreatorType | BackHireMeActionCreatorType
type HireMeActionCreatorType = {type: typeof HIRE_ME}
export const hireMeActionCreator = (): HireMeActionCreatorType => ({type: HIRE_ME})
type BackHireMeActionCreatorType = {type: typeof BACK_HIRE_ME}
export const backHireMeActionCreator = ():BackHireMeActionCreatorType => ({type: BACK_HIRE_ME})

export default hiredReducer