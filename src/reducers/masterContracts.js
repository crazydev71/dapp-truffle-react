/* eslint-disable */

//action types
const ADDCONTRACT = 'ADDCONTRACT'

//action creators
export const addContract = contract => ({
  type: ADDCONTRACT, contract
})

const initialState = {
  contracts: []
}

//reducer
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADDCONTRACT:
      // const arr = state.contracts.slice(0, state.length)
      // arr.push(action.contract)
      // return Object.assign({}, state, {contracts: arr})
      const arr = state.contracts.slice(0, state.length)
      arr.push({name: action.contract.name, instance: action.contract.instance, deployed: action.contract.deployed})
      return Object.assign({}, state, {contracts: arr})

  }

  return state
}

export default reducer
