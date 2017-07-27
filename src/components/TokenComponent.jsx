import React, { Component } from 'react'
import { div, Well, label, p } from 'react-bootstrap'

// component
/*export default function TokenComponent(props) {
  return (
    <div>
      <div>Default TOKEN</div>
      <Well bsSize="small">
        <label>Token Details</label>
        <p>Token Address: {props.address}</p>
        <p>Total supply: {props.totalSupply}</p>
      </Well>
    </div>
  )
}*/

class TokenComponent extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
    <div>
      <div>Default TOKEN</div>
      <Well bsSize="small">
        <label>Token Details</label>
        <p>Token Address: {this.props.token.address}</p>
        <p>Total supply: {this.props.totalSupply}</p>
      </Well>
    </div>      
    )
  }
}
// TokenComponent.propsTypes = {
//   address : React.PropsTypes.string,
//   totalSupply: React.PropsTypes.string
// }
export default TokenComponent