import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



//copy state to component props
const MapStateToProps = (state) => {
  return {
    // token: state.token.instance,
    token: state.masterContracts.contracts[1],
    accounts: state.blockchain.accounts,
    loading: state.loader.chainLoading

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
    const { token, accounts } = this.props 
    const ownerAccount = accounts[0]
    const secondaryAccount = accounts[1]
    token.deployed.transfer(secondaryAccount, 100, {
            from: ownerAccount
          }).then(function(results){
            console.log("RESULT_______________________", results.logs[0].event)
          }).catch(function(e){
            console.log("Exception...............")
          })
  }



  render() {
    const { loading } = this.props 

    return (
      <div>
        <p>Click on the button to transfer 100 Token from Owner Account the the sccondary accout:</p>
        {loading && <button onClick={this.transferToken}>Transfer</button>}
      </div>
    )
  }

}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(TransferContainer))

