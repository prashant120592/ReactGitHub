import React, { Component } from 'react';
import Loading from '../innerComponents/Loading';
class Profile extends Component {
	componentDidMount = () => {
		this.props.getUser(this.props.match.params.username);
	};
	handleBack = () => this.props.history.push('/');
	render() {
		if (this.props.isLoading === true) {
			return <Loading />;
		}
		return (
			<div className='container userdetails'>
				<div className='row'>
					<div className='col-md-6 offset-md-3 text-center'>
						<div>
							<h2> {this.props.user.login}</h2>
						</div>
						<div>
							<img src={this.props.user.avatar_url} width='200' style={{ borderRadius: '100%' }} />
						</div>
						<div className='inner_desc'>{this.props.user.name}</div>
						<div>Company: {this.props.user.company}</div>
						<div>Location: {this.props.user.location}</div>
						<div className='goback'>
							<button className='btn btn-primary' onClick={this.handleBack}>
								Go back
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
