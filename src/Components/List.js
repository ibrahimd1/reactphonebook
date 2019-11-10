import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './List.css'

export default class List extends Component {
	static propTypes = {
		contacts: PropTypes.array.isRequired
	}

	render() {
		const {contacts} = this.props

		return (
			<div className={'listArea'}>
				<input
					name={'filter'}
					id={'filter'}
					placeholder={'Filter by name or phone'}
				/>
				<ul className={'list'}>
					{contacts.map(contact => (
						<li key={contact.phone}>
							<span className={'name'}>{contact.name}</span>
							<span className={'phone'}>{contact.phone}</span>
							<span className={'clearfix'}></span>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
