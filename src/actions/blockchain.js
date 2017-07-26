import Web3 from 'web3'
import store from '../index'
import { loadUser } from '../reducers/userThunks.js'

// export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export const WEB3_BLOCKCHAIN_CONNECT = 'WEB3_BLOCKCHAIN_CONNECT'


export function initiateWeb3() {
    return new Promise(function(reject, resolve){
        const provider = new Web3.providers.HttpProvider('http://localhost:8545')
        const web3 = new Web3(provider)
        resolve(web3)
    }).catch(function(web3){
            store.dispatch(connectWeb3(web3.eth))

            web3.eth.getAccounts((error, accounts) => {
                
                const defaultUser = {
                    email: 'arnoldomora79@gmail.com',
                    password: '1234',
                    accountAddress: accounts[0]
                    }

                store.dispatch(loadUser(defaultUser))

            })
    });
}

function connectWeb3(web3) {
    return {
        type: WEB3_BLOCKCHAIN_CONNECT,
        web3
    }
}


// export const INITIAL_PARAMS = 'INITIAL_PARAMS'
// export function initialParams() {
//     return {
//         type: INITIAL_PARAMS,
//         Loading: 2

//     }
// }