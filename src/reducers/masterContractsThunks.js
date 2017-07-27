import { addContract } from './masterContracts'

// import store from '../index'
// thunks dispatch a master contract to add it to state in order to clone from it around the app
export const loadContract = (contract) =>
  (disptach) => {
    disptach(addContract(contract))
  }
// export const ADDCONTRACT = 'ADDCONTRACT'
// export function  loadContract(contract){
//   store.disptach({
//     type: ADDCONTRACT,
//     name : contract.name,
//     instance: contract.instance
//   }
//   )
// }
