import { expect } from 'chai'
import store from '../index'
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

token.deployed().then(instance => {

  describe('MyContracts Reducer dispatches actions correctly', () => {
    it('it should load a mycontract', () => {
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


