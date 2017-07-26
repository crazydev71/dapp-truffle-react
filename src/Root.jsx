import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import Header from './components/Header'
// import AppContainer from './containers/App'
// import TokenContainer from './containers/TokenContainer'
// import DaoContainer from './containers/DaoContainer'

import { initiateWeb3 } from './actions/blockchain'


class Root extends Component {
    componentWillMount(){
        initiateWeb3()
    }
    render(){
        return (
        <div>
            <main>
                <Header/>
                <div className="container">
                    
                </div>
            </main>
        </div>
        );
    }
}
                    //<Route exact path="/" component={ AppContainer }/>
                    // <Route exact path="/" component={ App }/>
                    // <Route path="/token" component={ TokenContainer }/>        
export default Root;