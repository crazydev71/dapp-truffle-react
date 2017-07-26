import { WEB3_BLOCKCHAIN_CONNECT } from '../actions/blockchain'


// error handling, for displaying to user
function connectBlockchain(state = {Loading : 1} , action) {

    switch(action.type){
        case WEB3_BLOCKCHAIN_CONNECT:
            return {Loading : 2}
        default:
            return state
    }
}

export default connectBlockchain;