/* eslint-disable */

//action types
const SETUSER = 'SETUSER'

//action creators
export const setUser = user => ({
  type: SETUSER, user
})

const initialState = {
  email: null,
  password: null,
  accountAddress: null
}

//reducer

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SETUSER:
      return Object.assign({}, state, action.user)
  }

  return state
}

export default reducer
