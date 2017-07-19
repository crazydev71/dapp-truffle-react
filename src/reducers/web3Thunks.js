import getWeb3 from '../utils/getWeb3'
import { addWeb3 } from './web3'

//thunks

//
export const loadWeb3 = () =>
  (disptach) => {
    getWeb3
      .then(results => {
        disptach(addWeb3(results.web3))
      })
      .catch(() => {
        console.log('Error finding web3.')
      })
  }
