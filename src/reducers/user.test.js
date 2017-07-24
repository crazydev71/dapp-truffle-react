import { expect } from 'chai'
import store from '../store'
import Web3 from 'web3'
import { setUser } from './user.js'

const dispatch = store.dispatch
const getState = store.getState

const provider = new Web3.providers.HttpProvider('http://localhost:8545')

const web3 = new Web3(provider)
let account

web3.eth.getAccounts((error, accounts) => {
  account = accounts[0]

  const user = {
    email: 'arnoldomora79@gmail.com',
    password: '1234',
    accountAddress: accounts[0]
  }

  describe('User reducer should dispacth actions correctly', () => {
    it('it should store an user correctly', () => {
      dispatch(setUser(user))
      expect(getState().user.accountAddress).to.equal(accounts[0])
    })
  })
})

