//
/* eslint-disable */

//action types
const ADDMYCONTRACT = 'ADDMYCONTRACT'

//action creators
export const addMyContract = contract => ({
  type: ADDMYCONTRACT, contract
})

const initialState = {
  contracts: []
}

//reducer
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADDMYCONTRACT:
      const arr = state.contracts.slice(0, state.length)
      arr.push(action.contract)
      return Object.assign({}, state, {contracts: arr})
  }

  return state
}

export default reducer
