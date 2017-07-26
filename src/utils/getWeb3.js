import Web3 from 'web3'
import store from '../store'
import { loadWeb3 } from '../reducers/web3Thunks'
import { loadUser } from '../reducers/userThunks.js'

let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {
    let web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)

      store.dispatch(loadWeb3(web3))
      console.log('Injected web3 detected.');

      resolve('web3 inserted from window')
    } else {
      // Fallback to localhost if no web3 injection.
      const provider = new Web3.providers.HttpProvider('http://localhost:8545')

      web3 = new Web3(provider)

      store.dispatch(loadWeb3(web3))

      //load a default USER TEMPORALLY
      web3.eth.getAccounts((error, accounts) => {
        const defaultUser = {
          email: 'arnoldomora79@gmail.com',
          password: '1234',
          accountAddress: accounts[0]
        }

        store.dispatch(loadUser(defaultUser))

      })
      // END -- load a default USER TEMPORALLY -- END

      console.log('No web3 instance injected, using Local web3.');

      resolve('web3 inserted from local')
    }
  })
})

export default getWeb3
