import React from 'react'
import { connect } from 'react-redux'
import { addAsset } from '../actions'
import { Button, Form } from 'semantic-ui-react';

let AddAsset = ({ dispatch }) => {
    let input

    return (
        <div>
            <Form onSubmit={e => {

                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addAsset(input.value))
                input.value = ''
            }}>

                <Form.Field>
                    <label>Symbol</label>
                    <input ref={node => {
                        input = node
                    }} placeholder='Symbol' />
                </Form.Field>                
                <Button primary type="submit">
                    + Asset
            </Button>
            </Form>
        </div>

    )
}

AddAsset = connect()(AddAsset)

export default AddAsset