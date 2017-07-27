import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TokenComponent from '../components/TokenComponent'
// const TokenContract = require('../../build/contracts/Token.json')

//copy state to component props
const MapStateToProps = (state) => {
  return {
    token: state.token.instance,
    totalSupply: state.token.totalSupply,
    loading: state.loader.chainLoading

  }
}

// include 'disptach' to component through 'connect' and dispatch thunk functions from the reducers
const MapDispatchToProps = (dispatch) => {
  return {
    /// thunk functions go here
  }
}

//Token container component
class TokenContainer extends Component {


  render() {
    console.log("Status....................", this.props.loading)
    const { loading } = this.props
    if (loading){
      return (
        <TokenComponent totalSupply={this.props.totalSupply} token={this.props.token}/>
      )
    } else {
      return (
        <p>Loading</p>
      )
    }
  }
}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(TokenContainer))

