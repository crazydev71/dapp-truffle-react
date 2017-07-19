import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

//combine reducers in a single one
const rootReducer = combineReducers({
  routerReducer,
  web3: require('./web3').default
})

export default rootReducer
