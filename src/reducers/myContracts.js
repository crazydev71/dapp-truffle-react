//
/* eslint-disable */

//action types
const ADDMYCONTRACT = 'ADDMYCONTRACT'
const SETSELECTED = 'SETSELECTED'
const SETLASTINFO = 'SETLASTINFO'

//action creators
export const addMyContract = contract => ({
  type: ADDMYCONTRACT, contract
})

export const selectedContract = contract => ({
  type: SETSELECTED, contract
})

export const updateInfo = info => ({
  type: SETLASTINFO, info
})

const initialState = {
  contracts: [],
  selected: null,
  lastInfo: null
}

//reducer
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADDMYCONTRACT:
      const arr = state.contracts.slice(0, state.length)
      arr.push(action.contract)
      return Object.assign({}, state, {contracts: arr})

    case SETSELECTED:
      return Object.assign({}, state, {selected: action.contract})

    case SETLASTINFO:
      return Object.assign({}, state, {lastInfo: action.info})
  }

  return state
}

export default reducer
