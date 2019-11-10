import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Contacts from "./Contacts";

class App extends Component {
	constructor() {
		super();
		this.addContact = this.addContact.bind(this);
	}
	state = {
		contacts: [
			{
				name: "Ahmet",
				phone: "5421452587"
			},
			{
				name: "Mehmet",
				phone: "5421452525"
			}
		]
	};

	addContact(contact) {
		const { contacts } = this.state;
		contacts.push(contact);
		this.setState({ contacts });
	}

	render() {
		return (
			<div className="App">
				<Contacts contacts={this.state.contacts} addContact={this.addContact} />
			</div>
		);
	}
}

export default App;
