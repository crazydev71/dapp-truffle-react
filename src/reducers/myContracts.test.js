import { expect } from 'chai'

import store from '../store'
import { addMyContract, selectedContract, updateInfo } from './myContracts'
import Web3 from 'web3'
import TokenContract from '../../build/contracts/Token.json'

const contract = require('truffle-contract')

const dispatch = store.dispatch
const getState = store.getState

const provider = new Web3.providers.HttpProvider('http://localhost:8545')

const web3 = new Web3(provider)
const token = contract(TokenContract)
token.setProvider(web3.currentProvider)

const info1 = {
  infoOne: 'some info',
  infoTwo: 'other info'
}

const info2 = {
  infoOne: 'some2 info2',
  infoTwo: 'other2 info2'
}

token.deployed().then(instance => {

  describe('MyContracts Reducer dispatches actions correctly', () => {

    it('it should load mycontract', () => {
      dispatch(addMyContract({
        name: 'token',
        instance: instance
      }))
      expect(getState().myContracts.contracts[0].instance.address).to.equal(instance.address)
    })

    it('it should set a selected contract', () => {
      dispatch(selectedContract(instance))
      expect(getState().myContracts.selected.address).to.equal(instance.address)
    })

    it('it should update lastInfo', () => {
      dispatch(updateInfo(info1))
      dispatch(updateInfo(info2))
      expect(getState().myContracts.lastInfo).to.equal(info2)
    })

  })
})
.catch(error => {
  console.error('error: ', error)
})


