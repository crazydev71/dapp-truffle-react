import DaoContract from '../../build/contracts/DAO.json'
import TokenContract from '../../build/contracts/Token.json'
import store from '../index'
import { loadContract } from '../reducers/masterContractsThunks'

//create instances of all our master contracts to clon from them
//create instances of all our master contracts to clon from them
const instantiateContracts = () => {
  const { blockchain } = store.getState()
  const contract = require('truffle-contract')

  //setup master contracts
  const token = contract(TokenContract)
  const dao = contract(DaoContract)
  token.setProvider(blockchain.currentProvider)
  dao.setProvider(blockchain.currentProvider)
  const contracts = [{name: 'dao' ,instance: dao}, {name: 'token', instance: token}]
  const promises = []

  //make an array of promises and insert into store
  contracts.forEach(contract => {
    promises.push(contract.instance.deployed().then(instance => {
        console.log('contract instance deployed', instance)
        store.dispatch(loadContract({
          name: contract.name,
          instance: contract.instance,
          deployed: instance
        }))
        return instance
      })
      .catch(error => {
        console.error('error: ', error)
      })
    )
  })
  return Promise.all(promises)
}

export default instantiateContracts
