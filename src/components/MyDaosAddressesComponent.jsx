import React from 'react'
import { div, Button, Well } from 'react-bootstrap'

// component
export default function MyDaosAddressesComponent(props) {
  const myDaos = props.daos

  return (
    <div>
      {myDaos && myDaos.map(dao =>{
          return(
            <Well key={dao.instance.address} bsSize="small">
              <label>DAO Address:</label>
              <p>{dao.instance.address}</p>
              <Button onClick={() => {props.details(dao)}}>Admin & Details</Button>
            </Well>
          )
        })
      }
    </div>
  )
}
