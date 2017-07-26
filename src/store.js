import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// not being used as it gives troubles with storing web3 to state
//import { composeWithDevTools } from 'redux-devtools-extension'

//create Store with Thunk and logger middleware
const store = createStore(
  rootReducer,
    //composeWithDevTools(
        applyMiddleware(
            createLogger( {collapsed: true} ),
            thunkMiddleware
        )
    //)
);

export default store
