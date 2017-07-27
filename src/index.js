import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { 
  BrowserRouter
  // Route
   } from 'react-router-dom'
import configureStore from './store'
import Root from './Root'
// import Header from './components/Header'
// import TokenContainer from './containers/TokenContainer'
// import DaoAdminContainer from './containers/DaoAdminContainer'

// import getWeb3 from './utils/getWeb3'
// import instantiateContracts from './utils/instantiateContracts'

// import { initiateWeb3 } from './actions/blockchain'

// import { initialParams } from './actions/blockchain'

const initialState = Object.assign(
     {},
     window.INITIAL_STATE,
)

const store = configureStore(initialState)

export default store

// store.dispatch(initiateWeb3())
// store.dispatch(initialParams())

document.addEventListener('DOMContentLoaded', function () {
    //   getWeb3
    // .then(results => {
    //   console.log('Inserting web3 results:',results)
    //   return instantiateContracts()
    // })
    // .then(result => {
    //   console.log('Successful contracts instantiation: ', result)
    //   //if success load react app
     ReactDom.render(
         <Provider store={store}>
          <BrowserRouter>
            <Root/>
          </BrowserRouter>
        </Provider>,
         document.getElementById('root')
     );
});
// })
// .catch(() => {
//   console.log('Error finding web3.')
// })

