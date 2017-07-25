import React from 'react'
import { div, Button, Well, h4, form, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

// component
export default function Header(props) {
    return (
      <div>
        <Well >
        <h4>CREATE A NEW DAO</h4>
        <form onChange={(e) => props.change(e)}>
            <FormGroup >
              <ControlLabel className={''}>Shares to pass a vote - 1000 by default</ControlLabel>

              <FormControl
                className={''}
                type="text"
                placeholder={1000}
                id="0"
              />

              <ControlLabel className={''}>Minutes for debate - 6000 by default</ControlLabel>

              <FormControl
                className={''}
                type="text"
                placeholder={6000}
                id="1"
              />

            </FormGroup>
        </form>
        <Button onClick={() => {props.newDao()}}>CREATE</Button>
        </Well>
      </div>
    )
}
