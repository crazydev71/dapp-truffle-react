import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

// example code
import App from './App'
// Header
import Header from './components/Header'
// DAO Container
import TokenContainer from './containers/TokenContainer'

ReactDOM.render(
  (<Provider store={store}>
     <BrowserRouter>
      <div>
          <main>
            <Header/>
            <div className="container">
              <Route exact path="/app" component={ App }/>
              <Route path="/token" component={ TokenContainer }/>
            </div>
          </main>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);

//<Route exact path="/" component={ App }/>
