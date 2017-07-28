import { web3Connect } from './blockchain'

  
export const  connectWeb3 = (params) => 
  (dispatch) => {
      dispatch(web3Connect(params))
  }