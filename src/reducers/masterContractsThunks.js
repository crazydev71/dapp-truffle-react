import { addContract } from './masterContracts'

//thunks

//dispatch a master contract to add it to state in order to clone from it around the app
export const loadContract = (contract) =>
  (disptach) => {
    disptach(addContract(contract))
  }
