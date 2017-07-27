import { INITIAL_LOADING_END } from '../actions/loader'


// error handling, for displaying to user
function initChain(state = { chainLoading : false} , action) {

    switch(action.type){
        case INITIAL_LOADING_END:
            return {
                chainLoading: action.chainLoading
            }
        default:
            return state
    }
}


export default initChain;