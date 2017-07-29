import { initialloadingEnd } from './loader'

  
export const  loadingEnd = (status) => 
  (dispatch) => {
      dispatch(initialloadingEnd(status))
  }