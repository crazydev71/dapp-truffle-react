import { WEB3_BLOCKCHAIN_CONNECT } from '../actions/blockchain'


// error handling, for displaying to user
function connectBlockchain(state = {} , action) {

    switch(action.type){
        case WEB3_BLOCKCHAIN_CONNECT:
            return {
                connected: action.connected,
                currentProvider: action.currentProvider,
                accounts: action.accounts,
                web3_Ethereum : action.web3_Ethereum
            }
        default:
            return state
    }
}


export default connectBlockchain;