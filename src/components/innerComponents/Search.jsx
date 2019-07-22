import React, { Component } from 'react';
import Reset from './Reset';
export default class Search extends Component {
	state = { searchName: '', showReset: false };

	handleSubmit = (e) => {
		e.preventDefault();
		const { searchName } = this.state;
		if (searchName === '') {
			return this.props.setAlert();
		}
		this.setState({ showReset: true });
		this.props.searchUsers(this.state.searchName);
	};

	setValue = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	resetValue = () => {
		this.setState({ searchName: '', showReset: false });
	};

	render() {
		const { searchName } = this.state;
		return (
			<div className='searchform'>
				<form onSubmit={this.handleSubmit}>
					<div className='form-group'>
						<input
							type='text'
							name='searchName'
							id='searchName'
							value={searchName}
							placeholder='Search Username'
							className='form-control'
							onChange={this.setValue}
						/>
					</div>
					<button className='btn btn-primary'>Search</button>
					{this.state.showReset === true && (
						<Reset resetUsers={this.props.resetUsers} resetValue={this.resetValue} />
					)}
				</form>
			</div>
		);
	}
}
