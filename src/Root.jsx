import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import TokenContainer from './containers/TokenContainer'
import TransferContainer from './containers/TransferContainer'
import DaoAdminContainer from './containers/DaoAdminContainer'

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
                    <Route path="/token" component={ TokenContainer }/>
                    <Route path="/transfer" component={ TransferContainer }/>    
                    <Route exact path="/" component={ DaoAdminContainer }/>         
                </div>
            </main>
        </div>
        );
    }
}


export default Root;