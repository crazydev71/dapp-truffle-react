import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import Header from './components/Header'
// import AppContainer from './containers/App'
// import TokenContainer from './containers/TokenContainer'
// import DaoContainer from './containers/DaoContainer'




class Root extends Component {
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