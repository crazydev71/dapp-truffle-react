import DaoContract from '../../build/contracts/DAO.json'
import TokenContract from '../../build/contracts/Token.json'
import store from '../store'
import { loadContract } from '../reducers/masterContractsThunks'

//create instances of all our master contracts to clon from them
const instantiateContracts = () => {
  const web3 = store.getState().web3
  const contract = require('truffle-contract')

  //setup master contracts
  const token = contract(TokenContract)
  const dao = contract(DaoContract)
  token.setProvider(web3.currentProvider)
  dao.setProvider(web3.currentProvider)
  const contracts = [{name: 'dao' ,instance: dao}, {name: 'token', instance: token}]
  const promises = []

  //make an array of promises and insert into store
  contracts.forEach(contract => {
    promises.push(contract.instance.deployed().then(instance => {
        console.log('contract instance deployed', instance)
        store.dispatch(loadContract({
          name: contract.name,
          instance: instance
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
