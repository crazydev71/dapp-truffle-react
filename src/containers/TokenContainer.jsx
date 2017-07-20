import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import getWeb3 from '../utils/getWeb3'
import TokenContract from '../../build/contracts/Token.json'
import TokenComponent from '../components/TokenComponent'

//copy state to component props
const MapStateToProps = (state) => {
  return {
    //web3: state.web3.web3
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
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      token: {address: 'something'},
      totalSupply: 0,
      allowance: null
    }
  }

  componentWillMount() {
  // Get network provider and web3 instance.
  // See utils/getWeb3 for more info.

  getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {

    const contract = require('truffle-contract')
    const token = contract(TokenContract)
    token.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    let tokenInstance
    //let accountsList

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
        console.log('accounts',accounts)
        //accountsList = accounts
        token.deployed().then((instance) => {
          tokenInstance = instance
          this.setState({ token: tokenInstance })

          //
          console.log('tokenInstance: ',tokenInstance)
          return tokenInstance.totalSupply()
        })
        .then((result) => {
          console.log('total supply: ', result.c[0])
          this.setState({ totalSupply: result.c[0] })
          //return tokenInstance.allowance()
        })
        .then(result => {
          console.log('allowance: ', result)
        })

      })
  }

  render() {
    return (
      <TokenComponent totalSupply={this.state.totalSupply} token={this.state.token}/>
    )
  }

}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(TokenContainer))

