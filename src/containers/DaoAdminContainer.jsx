import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DaoAdminComponent from '../components/DaoAdminInfo'
import CreateDaoComponent from '../components/CreateDaoComponent'
import MyDaosAddressesComponent from '../components/MyDaosAddressesComponent'
import { loadNewDaoContract } from '../reducers/myContractsThunks'
import { selectedContract } from '../reducers/myContracts'

//copy state to component props
const MapStateToProps = (state) => {
  return {
    state
  }
}

// include 'disptach' to component through 'connect' and dispatch thunk functions from the reducers
const MapDispatchToProps = (dispatch) => {
  return {
    newDaoContract: (sharesToVote, minutesForDebate) => {
      dispatch(loadNewDaoContract(sharesToVote, minutesForDebate))
    },
    setSelected: (contract) => {
      dispatch(selectedContract(contract))
    }
  }
}

//DAO ADMIN container component
class DaoAdminContainer extends Component {
  constructor(props) {
    super(props)
    this.handleNewDao = this.handleNewDao.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDaoDetails = this.handleDaoDetails.bind(this)
    this.sharesToVote = 1000
    this.minutesToDebate = 6000
  }

  //handle a new dao btn click
  handleNewDao () {
    console.log(`will create a new DAO with ${this.sharesToVote} shares to vote and ${this.minutesToDebate} minutes to debate`)
    this.props.newDaoContract(this.sharesToVote, this.minutesToDebate)
  }

  // handle changes to any of the params
  handleChange(e) {
    if(e.target.id === '0'){
      this.sharesToVote = e.target.value
    } else if(e.target.id === '1'){
      this.minutesToDebate = e.target.value
    }
  }

  // handle transition to look for DAO in detail
  handleDaoDetails(contract) {
    //console.log('here', contract)
    this.props.setSelected(contract)
    this.props.history.push('/selected')
  }

  render() {
    const myDaos = this.props.state.myContracts.contracts

    return (
      <div>
        <DaoAdminComponent masterContracts={this.props.state.masterContracts.contracts} web3={this.props.state.web3} user={this.props.state.user}/>
        <CreateDaoComponent change={this.handleChange} newDao={this.handleNewDao}/>
        <MyDaosAddressesComponent daos={myDaos} details={this.handleDaoDetails}/>
      </div>
    )
  }
}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(DaoAdminContainer))

