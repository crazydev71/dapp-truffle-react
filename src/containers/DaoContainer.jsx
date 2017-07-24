import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import getWeb3 from '../utils/getWeb3'
import instantiateContracts from '../utils/instantiateContracts'

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
  constructor(props) {
    super(props)

  }

  //runs when the component will mount for first time
  componentWillMount() {
  // Get network provider and web3 instance.
  // See utils/getWeb3 for more info.
    getWeb3
      .then(results => {
        console.log('Inserting web3 results:',results)
        return instantiateContracts()
      })
      .then(result => {
        console.log('Successful contracts instantiation: ', result)
      })
      .catch(() => {
        console.log('Error finding web3.')
      })
  }

  render() {

    return (
      <div>
      <div>DAO CONTAINER</div>
      <div>PROVIDER: {}</div>
      <div>CONTRACT1: {}</div>
      <div>CONTRACT2: {}</div>
      </div>
    )
  }
}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(DaoContainer))

