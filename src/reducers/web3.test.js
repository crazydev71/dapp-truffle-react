import { expect } from 'chai'
import store from '../store'
import { addWeb3 } from './web3'
import Web3 from 'web3'

const dispatch = store.dispatch
const getState = store.getState

const provider = new Web3.providers.HttpProvider('http://localhost:8545')

const web3 = new Web3(provider)

describe('Web3 Reducer dispatches actions correctly', () => {

  it('it should load web3', () => {
    dispatch(addWeb3(web3))
    expect(getState().web3.currentProvider.host).to.equal("http://localhost:8545")
  })

})
