import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import getWeb3 from '../utils/getWeb3'
// import TokenContract from '../../build/contracts/Token.json'
import TokenComponent from '../components/TokenComponent'


import store from '../index'
import { addContractService } from '../actions/token'

// import TokenContract from '../../build/contracts/Token.json'
const TokenContract = require('../../build/contracts/Token.json')

//copy state to component props
const MapStateToProps = (state) => {
  return {
    // web3: state.blockchain.web3_Ethereum,
    // currentProvider: state.blockchain.currentProvider
    // token: state.token
    token: state.token.instance,
    accounts: state.blockchain.accounts,
    loading: state.loader.chainLoading
    // address: state.token.instance

  }
}

// include 'disptach' to component through 'connect' and dispatch thunk functions from the reducers
const MapDispatchToProps = (dispatch) => {
  return {
    /// thunk functions go here
  }
}

//Transfer container component
class TransferContainer extends Component {
  constructor(props) {
    super(props)
    this.transferToken = this.transferToken.bind(this)
  }

  transferToken(){
    const { loading, token, accounts } = this.props 
    const ownerAccount = accounts[0]
    const secondaryAccount = accounts[1]
    token.transfer(secondaryAccount, 100, {
            from: ownerAccount
          }).then(function(results){
            console.log("RESULT_______________________", results.logs[0].event)
          }).catch(function(e){
            console.log("Exception...............")
          })
  }



  render() {
    const { loading, token, accounts } = this.props 

    return (
      <div>
        <p>Click on the button to transfer 100 Token from Owner Account the the sccondary accout:</p>
        {loading && <button onClick={this.transferToken}>Transfer</button>}
      </div>
    )
  }

}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(TransferContainer))

