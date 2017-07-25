import { expect } from 'chai'
import store from '../store'
import { addMyContract } from './myContracts'
import Web3 from 'web3'
import TokenContract from '../../build/contracts/Token.json'

const contract = require('truffle-contract')

const dispatch = store.dispatch
const getState = store.getState

const provider = new Web3.providers.HttpProvider('http://localhost:8545')

const web3 = new Web3(provider)
const token = contract(TokenContract)
token.setProvider(web3.currentProvider)

web3.eth.getAccounts((error, accounts) => {
  accountsList = accounts
    token.new({
        from: accountsList[0],
        gas: 4712388,
        gasPrice: 100000000000
      })
    .then(instance => {
      describe('MyContracts Reducer dispatches actions correctly', () => {
        it('it should load mycontract', () => {
          dispatch(addMyContract({
            name: 'token',
            instance: instance
          }))
          expect(getState().myContracts.contracts[0].instance.address).to.equal(instance.address)
        })
      })
    })
    .catch(error => {
      console.error('error: ', error)
    })
})
