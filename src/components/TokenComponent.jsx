import React from 'react'
import { div, Well, label, p, Button } from 'react-bootstrap'

// component
export default function TokenComponent(props) {
  console.log(props)
  return (
    <div>
      <div>Default TOKEN</div>
      <Well bsSize="small">
        <label>Token Details</label>
        <p>Token Address: {props.token.address}</p>
        <p>Total supply: {props.totalSupply}</p>
      </Well>
    </div>
  )
}
