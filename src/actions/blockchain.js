/* eslint-disable */
import Web3 from 'web3'
import store from '../index'
import { loadUser } from '../reducers/userThunks.js'
import instantiateContracts from '../utils/instantiateContracts'

import DaoContract from '../../build/contracts/DAO.json'
import TokenContract from '../../build/contracts/Token.json'

import { addContractServiceAction } from './token'
import { addDaoContractAction } from './dao'
import { loedingEnd } from './loader'

const contract = require('truffle-contract')
const token = contract(TokenContract)
const dao = contract(DaoContract)


export const WEB3_BLOCKCHAIN_CONNECT = 'WEB3_BLOCKCHAIN_CONNECT'



export function initiateWeb3() {
    let provider
    let tokenInstance
    let tokenAddress
    let daoInstance
    let daoAddress
    return new Promise(function(reject, resolve){
        const provider = new Web3.providers.HttpProvider('http://localhost:8545')
        const web3 = new Web3(provider)
        resolve(web3)
    }).catch(function(web3){
            store.dispatch(connectWeb3(web3.isConnected(), web3.currentProvider, web3.eth.accounts, web3.eth))
            web3.eth.getAccounts((error, accounts) => {
                const defaultUser = {
                    email: 'arnoldomora79@gmail.com',
                    password: '1234',
                    accountAddress: accounts[0]
                }
                store.dispatch(loadUser(defaultUser))
            })
            provider = web3.currentProvider
            token.setProvider(provider)
            return token.deployed()
    }).then(function(instance){
        tokenInstance = instance
        tokenAddress = instance.address
        return instance.totalSupply()
    }).then(function(result){
        console.log('total supply: ', result.c[0])
        addContractServiceAction({
            name: "Token",
            instance: tokenInstance,
            totalSupply: result.c[0],
            address: tokenAddress
        })
        dao.setProvider(provider)
        return dao.deployed()
    }).then(function(instance){
        daoInstance = instance
        daoAddress = instance.address
        addDaoContractAction({
            name: "DAO",
            instance: daoInstance,
            address: daoAddress
        })
        loedingEnd()
    }).then(function(){
        return instantiateContracts()
    });
}

function connectWeb3(connected, currentProvider, accounts, web3_Ethereum) {
    return {
        type: WEB3_BLOCKCHAIN_CONNECT,
        connected,
        currentProvider,
        accounts,
        web3_Ethereum
    }
}
