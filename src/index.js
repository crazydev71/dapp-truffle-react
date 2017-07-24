import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './components/Header'
import TokenContainer from './containers/TokenContainer'
import DaoContainer from './containers/DaoContainer'

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



//<Route exact path="/" component={ App }/>
