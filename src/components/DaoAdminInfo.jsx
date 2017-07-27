import React from 'react'
import { div } from 'react-bootstrap'

// component
export default function DaoAdminComponent(props) {
    return (
      <div>
        <div>GENERAL INFO</div>
        <div>WEB3 Provider: {props.web3.host}</div>
        <div>DAO Master Contract: {props.dao.address}</div>
        <div>TOKEN Master Contract: {props.token.address}</div>
        <div>------------</div>
        <div>USER INFO</div>
        <div>Email: {props.user.email}</div>
        <div>Account: {props.user.accountAddress}</div>
      </div>
    )
}

