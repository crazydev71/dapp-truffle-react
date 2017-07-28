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
    if(this.props.state.myContracts.selected){
          this.props.fetchSelected()
    }

  }

  handleRulesChange(){
    console.log('change some rules here')
  }


  render() {
    const dao = this.props.state.myContracts.selected
    const info = this.props.state.myContracts.lastInfo
    return (
      <div>
        {info !== null && dao !== null ?
        <Well bsSize="small">
          <label>DAO Address:</label>
          <p>{dao.instance.address}</p>
            <div>
              <label>Owner:</label>
              <p>{info.owner}</p>
              <p>Debating Period Minutes: {info.debatingPeriodInMinutes}</p>
              <p>Minimum Quorum: {info.minimumQuorum}</p>
              <p>Number of Proposals: {info.numProposals}</p>
              <p>Shares Token Address: {info.sharesTokenAddress}</p>
            </div>
        </Well>
        :
        <Well bsSize="small">
          <label>No selected DAO go to ^^^ DAO Admin to create one</label>
        </Well>
        }
      </div>
    )
  }
}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(SelectedContractContainer))
