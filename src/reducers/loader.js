import { INITIAL_LOADING_END } from '../actions/loader'

export const initialloadingEnd = (status) => (
    {type: INITIAL_LOADING_END, status}
)

// error handling, for displaying to user
const initialState = { chainLoading : false}


export  const reducer = (state = initialState, action) => {

    switch(action.type){
        case INITIAL_LOADING_END:
            return {
                chainLoading: action.status.chainLoading
            }
        default:
            return state
    }
}


export default reducer;