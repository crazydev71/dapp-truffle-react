import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSelectedInfo } from '../reducers/myContractsThunks'
import { div, Well } from 'react-bootstrap'

//copy state to component props
const MapStateToProps = (state) => {
  return {
    state
  }
}

// include 'disptach' to component through 'connect' and dispatch thunk functions from the reducers
const MapDispatchToProps = (dispatch) => {
  return {
    fetchSelected: () => {
      dispatch(fetchSelectedInfo())
    }
  }
}

//Selected Contract container component
class SelectedContractContainer extends Component {
  constructor(props) {
    super(props)
    this.handleRulesChange = this.handleRulesChange.bind(this)
  }

  componentWillMount(){
    this.props.fetchSelected()
  }

  handleRulesChange(){
    console.log('change some rules here')
  }


  render() {
    const dao = this.props.state.myContracts.selected
    const info = this.props.state.myContracts.lastInfo
    return (
      <div>
        <Well bsSize="small">
          <label>DAO Address:</label>
          <p>{dao.instance.address}</p>
          {info !== null ?
            <div>
              <p>NAME: {info.name}</p>
              <p>OWNER: {info.owner}</p>
              <p>OWNER BALANCE: {info.ownerBalance}</p>
              <p>TOTAL SUPPLY: {info.totalSupply}</p>
              <p>DECIMALS: {info.decimals}</p>
              <p>SYMBOL: {info.symbol}</p>
            </div>
            : ''}
            <label>Transfer Events:</label>
            <p>... something goes here when transfers comming</p>
            <label>Approval Events:</label>
            <p>... something goes here when approvals comming</p>
        </Well>
      </div>
    )
  }
}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(SelectedContractContainer))
