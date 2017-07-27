import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

//combine reducers in a single one
const rootReducer = combineReducers({
  routerReducer,
  web3: require('./web3').default,
  user: require('./user').default,
  masterContracts: require('./masterContracts').default,
  myContracts: require('./myContracts').default,
  blockchain: require('./blockchain').default,
  token: require('./token').default,
  loader: require('./loader').default,
})

export default rootReducer
