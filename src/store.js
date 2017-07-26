import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// not being used as it gives troubles with storing web3 to state
//import { composeWithDevTools } from 'redux-devtools-extension'

// const initialState = Object.assign(
//      {},
//      window.INITIAL_STATE,
// )


// function getDebugSessionKey() {
//   // You can write custom logic here!
//   // By default we try to read the key from ?debug_session=<key> in the address bar
//   const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
//   return (matches && matches.length > 0)? matches[1] : null;
// }


// //create Store with Thunk and logger middleware
// const store = createStore(
//   rootReducer,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   //composeWithDevTools(
//   applyMiddleware(
//       // createLogger( {collapsed: true} ),
//       thunkMiddleware
//   )
//     //)
// );
//
// export default store

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0

  const enhancer = compose(
    // Middleware you want to use in development:
    // applyMiddleware(d1, d2, d3),
    applyMiddleware(createLogger( {collapsed: true} ),thunkMiddleware),
    // Required! Enable Redux DevTools with the monitors you chose
    //DevTools.instrument(),
    // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
    //persistState(getDebugSessionKey()),
    // Uncomment to enable Redux dev tool browser extension
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  const store = createStore(
      rootReducer,
      initialState,
      enhancer
  )

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      return store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
    }
    );
  }

  return store;
}
