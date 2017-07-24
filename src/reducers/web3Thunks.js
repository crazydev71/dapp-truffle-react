import { addWeb3 } from './web3'

//thunks

//call getWeb3 util and dispatch web3 to state in order to have it available all around the app
export const loadWeb3 = (web3) =>
  (disptach) => {
    disptach(addWeb3(web3))
  }
