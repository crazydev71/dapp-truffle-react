/* eslint-disable */

//action types
const ADDWEB3 = 'ADDWEB3'

//action creators
export const addWeb3 = web3 => ({
  type: ADDWEB3, web3
})

const initialState = null

//reducer
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADDWEB3:
      return Object.assign({}, state, action.web3)

  }

  return state
}

export default reducer
