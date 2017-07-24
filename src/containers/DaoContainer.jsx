import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//copy state to component props
const MapStateToProps = (state) => {
  return {
    state
  }
}

// include 'disptach' to component through 'connect' and dispatch thunk functions from the reducers
const MapDispatchToProps = (dispatch) => {
  return {
    /// thunk functions go here
  }
}

//Token container component
class DaoContainer extends Component {

  render() {
    console.log(this.props.state)

    return (
      <div>
      <div>DAO CONTAINER</div>
      <div>PROVIDER: {this.props.state.web3.currentProvider.host}</div>
      <div>DAO CONTRACT: {this.props.state.masterContracts.contracts[0].instance.address}</div>
      <div>TOKEN CONTRACT: {this.props.state.masterContracts.contracts[1].instance.address}</div>
      </div>
    )
  }
}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(DaoContainer))

