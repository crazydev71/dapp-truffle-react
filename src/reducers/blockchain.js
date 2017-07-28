// import { WEB3_BLOCKCHAIN_CONNECT } from '../actions/blockchain'

const WEB3_BLOCKCHAIN_CONNECT = 'WEB3_BLOCKCHAIN_CONNECT'

export const web3Connect = (params) => ({
    type: WEB3_BLOCKCHAIN_CONNECT,
    connected: params.connected,
    currentProvider: params.currentProvider,
    accounts: params.currentProvider,
    web3_Ethereum: params.web3_Ethereum
})


// error handling, for displaying to user
const reducer = (state = {} , action) => {

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


export default reducer;