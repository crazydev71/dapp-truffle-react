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
      transferEvent: null,
      approvalEvent: null,
      stop: false
    }

    this.transferListener = this.transferListener.bind(this)
    this.approvalListener = this.approvalListener.bind(this)
  }

  //callback for Transfer Event
  transferListener (error, res) {
    console.log('transferListener reporting: ', res)
    this.state.transferEvent.stopWatching()
    if(this.state.stop === false) {
      //send approval transaction
      this.state.token.approve.sendTransaction(res.args._to , 15000, {
        from: res.args._from
      })
      .then(result => {
        console.log('approve result: ', result)
        //set approval event listener
        this.setState({approvalEvent: this.state.token.Approval()})
        this.state.approvalEvent.watch(this.approvalListener)
      })
    } else {
      console.log('transferListener reporting: ', res)
      this.state.token.allowance(res.args._from, res.args._to)
      .then(result => {
        console.log('allowance remaingin: ', result)
      })
    }
  }

  //callback for Approval Event
  approvalListener (error, res) {
    console.log('approveListener reporting: ', res)
    this.state.approvalEvent.stopWatching()
    this.state.token.transferFrom.sendTransaction(res.args._owner, res.args._spender, 12000, {
        from: res.args._owner
      })
    .then(result => {
      console.log('transferFrom result',result)
      //set approval event listener again
      // this.setState({stop: true})
      // this.setState({transferEvent: this.state.token.Transfer()})
      // this.state.transferEvent.watch(this.transferListener)
    })
  }


  //runs when the component will mount for first time
  componentWillMount() {
  // Get network provider and web3 instance.
  // See utils/getWeb3 for more info.
  // will be moved to a reducer later

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

  //Token contract instance
  instantiateContract() {

    const contract = require('truffle-contract')
    const token = contract(TokenContract)
    token.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on Token.
    let tokenInstance
    let accountsList

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
        accountsList = accounts
        console.log('account 0: ',accountsList[0])
        token.deployed().then((instance) => {
          tokenInstance = instance
          //set token to state
          this.setState({ token: tokenInstance })
          //
          console.log('tokenInstance: ',tokenInstance)
          //get token total supply
          return tokenInstance.totalSupply()
        })
        .then((result) => {
          console.log('total supply: ', result.c[0])
          this.setState({ totalSupply: result.c[0] })
          //get token balance
          return tokenInstance.balanceOf(accountsList[0])
        })
        .then((result) => {
          console.log('balance: ', result.c[0])
            //token transfer transaction
            return tokenInstance.transfer.sendTransaction(accountsList[1], 50000, {
              from: accountsList[0]
            })
        })
        .then(result => {
          console.log('transfer result: ', result)
          //set transfer event listener
          this.setState({transferEvent: tokenInstance.Transfer()})
          this.state.transferEvent.watch(this.transferListener)
        })
        .catch(error => {
          console.error('error: ', error)
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

