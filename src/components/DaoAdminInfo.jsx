import React from 'react'
import { div } from 'react-bootstrap'

// component
export default function DaoAdminComponent(props) {
    return (
      <div>
        <div>GENERAL INFO</div>
        <div>WEB3 Provider: {props.web3.currentProvider.host}</div>
        <div>DAO Master Contract: {props.masterContracts[0].instance.address}</div>
        <div>TOKEN Master Contract: {props.masterContracts[1].instance.address}</div>
        <div>------------</div>
        <div>USER INFO</div>
        <div>Email: {props.user.email}</div>
        <div>Account: {props.user.accountAddress}</div>
      </div>
    )
}

