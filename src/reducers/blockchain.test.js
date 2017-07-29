import { expect } from 'chai'
import store from '../index'
import { web3Connect } from './blockchain'
import Web3 from 'web3'

const dispatch = store.dispatch
const getState = store.getState

const provider = new Web3.providers.HttpProvider('http://localhost:8545')

const web3 = new Web3(provider)

let account
web3.eth.getAccounts((error, accounts) => {
  account = accounts[0]
  describe('Web3 Reducer dispatches actions correctly', () => {

    it('it should load web3', () => {
      dispatch(web3Connect({
      connected: web3.isCoonected(),
      currentProvider: web3.currentProvider,
      accounts: web3.eth.accounts,
      web3_Ethereum: web3.eth
      }))
      expect(getState().blockchain.accounts[0]).to.equal(account)
    })

  })
})