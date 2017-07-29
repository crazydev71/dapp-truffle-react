import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

//combine reducers in a single one
const rootReducer = combineReducers({
  routerReducer,
  user: require('./user').default,
  masterContracts: require('./masterContracts').default,
  myContracts: require('./myContracts').default,
  blockchain: require('./blockchain').default,
  loader: require('./loader').default,
})

export default rootReducer
