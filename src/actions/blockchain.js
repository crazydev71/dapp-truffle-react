// import Web3 from 'web3'
// import { store } from '../index'

// export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export const WEB3_BLOCKCHAIN_CONNECT = 'WEB3_BLOCKCHAIN_CONNECT'
export function initiateWeb3() {
    return {
        type: WEB3_BLOCKCHAIN_CONNECT,
        Loading: 2

    }
}

// export const ADD_BLOCKCHAIN = 'ADD_BLOCKCHAIN'
// export function addBlockchain() {
//     window.addEventListener('load', function() {
//         let web3 = window.web3
//         Promise(function(reject, resolve){
//             const provider = new Web3.providers.HttpProvider('http://localhost:8545')
//             const web3 = (typeof window.web3 !== 'undefined') ? new Web3(provider) : null
//             console.log("HERE............", web3)
//             resolve('web3 inserted')
//         }).then(function(){
//             store.dispatch(loadWeb3(true))
//         }).catch(function(){
//             store.dispatch(loadWeb3(false))
//         })
//     })
// }
// export function loadWeb3(bool){
//     return {
//         type: ADD_BLOCKCHAIN,
//         web3Loading: bool
//     }
// }


// export const INITIAL_PARAMS = 'INITIAL_PARAMS'
// export function initialParams() {
//     return {
//         type: INITIAL_PARAMS,
//         Loading: 2

//     }
// }