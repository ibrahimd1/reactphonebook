import React, { Component } from "react";
import PropTypes from "prop-types";
import "./List.css";

export default class List extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired
    };

    onChangeFilterText = e => {
        this.setState({ filterText: e.target.value });
    };

    state = {
        filterText: ""
    };

    render() {
        const filteredContacts = this.props.contacts.filter(x => {
            return this.state.filterText !== ""
                ? x.name.toLowerCase().indexOf(this.state.filterText.toLocaleLowerCase()) !== -1
                : x.name;
        });

        return (
            <div className={"listArea"}>
                <input
                    name={"filter"}
                    id={"filter"}
                    placeholder={"Filter by name or phone"}
                    value={this.state.filterText}
                    onChange={this.onChangeFilterText}
                />
                <ul className={"list"}>
                    {filteredContacts.map(contact => (
                        <li key={contact.phone}>
                            <span className={"name"}>{contact.name}</span>
                            <span className={"phone"}>{contact.phone}</span>
                            <span className={"clearfix"}></span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
