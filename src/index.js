import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './components/Header'
import TokenContainer from './containers/TokenContainer'
import DaoContainer from './containers/DaoContainer'

import getWeb3 from './utils/getWeb3'
import instantiateContracts from './utils/instantiateContracts'

  // Get network provider and web3 instance.
  // See utils/getWeb3 for more info.
    getWeb3
      .then(results => {
        console.log('Inserting web3 results:',results)
        return instantiateContracts()
      })
      .then(result => {
        console.log('Successful contracts instantiation: ', result)

        ReactDOM.render(
  (<Provider store={store}>
     <BrowserRouter>
      <div>
          <main>
            <Header/>
            <div className="container">
              <Route exact path="/" component={ DaoContainer }/>
              <Route path="/token" component={ TokenContainer }/>
            </div>
          </main>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);
      })
      .catch(() => {
        console.log('Error finding web3.')
      })





//<Route exact path="/" component={ App }/>
