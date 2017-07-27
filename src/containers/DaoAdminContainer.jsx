import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DaoAdminComponent from '../components/DaoAdminInfo'
import CreateDaoComponent from '../components/CreateDaoComponent'
import { loadNewDaoContract } from '../reducers/myContractsThunks'
//copy state to component props
const MapStateToProps = (state) => {
  return {
    loading: state.loader.chainLoading,
    provider: state.blockchain.currentProvider,
    token: state.token.instance,
    dao: state.dao.instance,
    state
  }
}

// include 'disptach' to component through 'connect' and dispatch thunk functions from the reducers
const MapDispatchToProps = (dispatch) => {
  return {
    newDaoContract: (sharesToVote, minutesForDebate) => {
      dispatch(loadNewDaoContract(sharesToVote, minutesForDebate))
    },
  }
}

//DAO ADMIN container component
class DaoAdminContainer extends Component {
  constructor(props) {
    super(props)
    this.handleNewDao = this.handleNewDao.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  render() {
    const { loading } = this.props
    if (loading){
    return (
      <div>
        <DaoAdminComponent dao={this.props.dao} token={this.props.token} web3={this.props.provider} user={this.props.state.user}/>
        <CreateDaoComponent change={this.handleChange} newDao={this.handleNewDao}/>
      </div>
    )
    } else {
      return (
        <p>Loading</p>
      )
    }
  }
}
export default withRouter(connect(MapStateToProps, MapDispatchToProps)(DaoAdminContainer))

