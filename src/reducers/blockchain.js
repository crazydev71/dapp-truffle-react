import { WEB3_BLOCKCHAIN_CONNECT } from '../actions/blockchain'


// error handling, for displaying to user
function connectBlockchain(state = { web3 : null} , action) {

    switch(action.type){
        case WEB3_BLOCKCHAIN_CONNECT:
            return {
                connected: action.connected,
                currentProvider: action.currentProvider,
                web3_Ethereum : action.web3_Ethereum
            }
        default:
            return state
    }
}


export default connectBlockchain;