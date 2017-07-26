import { WEB3_BLOCKCHAIN_CONNECT } from '../actions/blockchain'


// error handling, for displaying to user
function connectBlockchain(state = { web3 : null} , action) {

    switch(action.type){
        case WEB3_BLOCKCHAIN_CONNECT:
            return {web3 : action.web3}
        default:
            return state
    }
}


export default connectBlockchain;