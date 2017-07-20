import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

// example code
import App from './App'
// Header
import Header from './components/Header'


ReactDOM.render(
  (<Provider store={store}>
     <BrowserRouter>
      <div>
          <main>
            <Header/>
            <div className="container">
              <Route exact path="/" component={ App }/>
            </div>
          </main>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);
