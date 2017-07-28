import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TokenComponent from '../components/TokenComponent'


//copy state to component props
const MapStateToProps = (state) => {
  return {
    token: state.masterContracts.contracts[1],
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
  constructor(props){
    super(props)
    this.state = {
      totalSupply : 0
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.token){
      let _this = this
      nextProps.token.instance.deployed().then(instance => {
        return instance.totalSupply()}).then(function(result){
          _this.setState({
            totalSupply: result.c[0]
          })
        })
    }

  }

  render() {

    const { loading } = this.props
    if (loading){
      return (
        <TokenComponent totalSupply={this.state.totalSupply} token={this.props.token.instance}/>
      )
    } else {
      return (
        <p>Loading</p>
      )
    }
  }
}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(TokenContainer))

