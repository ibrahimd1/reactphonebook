import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <List contacts={this.props.contacts} />
                <Form addContact={this.props.addContact} />
            </div>
        )
    }
}
