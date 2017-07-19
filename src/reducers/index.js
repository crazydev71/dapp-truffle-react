import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

//combine messages and boards reducers in a single reducer
const rootReducer = combineReducers({
  routerReducer,
  web3: require('./web3').default
})

export default rootReducer
