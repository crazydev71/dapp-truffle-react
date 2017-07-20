import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

//create Store with Thunk and logger middleware
const store = createStore(
  rootReducer,
    composeWithDevTools(
        applyMiddleware(
            createLogger( {collapsed: true} ),
            thunkMiddleware
        )
    )
);

export default store