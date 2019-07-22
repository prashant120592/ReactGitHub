import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Profile from './components/pages/Profile';
import Footer from './components/footer/Footer';
class App extends Component {
	state = {
		isLoading: false,
		isAlert: false,
		users: []
	};

	setAlert = () => {
		this.setState({ isAlert: { msg: 'Please Enter Username' } });
		setTimeout(() => {
			this.setState({ isAlert: false });
		}, 2000);
	};

	componentDidMount = async () => {
		try {
			this.setState({ isLoading: true });
			const Users = await fetch(`https://api.github.com/users`);
			if (!Users.ok) {
				throw new Error('Invalid Api');
			}
			const users = await Users.json();
			this.setState({ isLoading: false, users });
		} catch (error) {
			this.setState({ isLoading: false, users: [], isAlert: { msg: error.message } });
		}
	};

	searchUsers = async (username) => {
		try {
			this.setState({ isLoading: true });
			const Users = await fetch(`https://api.github.com/search/users?q=${username}`);
			if (!Users.ok) {
				throw new Error('Invalid Api');
			}
			const users = await Users.json();
			this.setState({ isLoading: false, users: users.items });
		} catch (error) {
			this.setState({ isLoading: false, users: [], isAlert: { msg: error.message } });
		}
	};

	resetUsers = async (e) => {
		this.setState({ users: [] });
		try {
			this.setState({ isLoading: true });
			const Users = await fetch(`https://api.github.com/users`);
			if (!Users.ok) {
				throw new Error('Invalid Api');
			}
			const users = await Users.json();
			this.setState({ isLoading: false, users: users });
		} catch (error) {
			this.setState({ isLoading: false, users: [], isAlert: { msg: error.message } });
		}
	};
	render() {
		const { isLoading, isAlert, users } = this.state;
		return (
			<Fragment>
				<Router>
					<Header />
					<Switch>
						<Route
							exact
							path='/'
							render={() => {
								return (
									<Fragment>
										<Home
											isLoading={isLoading}
											isAlert={isAlert}
											setAlert={this.setAlert}
											users={users}
											searchUsers={this.searchUsers}
											resetUsers={this.resetUsers}
										/>
									</Fragment>
								);
							}}
						/>
						<Route exact path='/about' component={About} />
						<Route exact path='/contact' component={ContactUs} />
						<Route exact path='/profile' component={Profile} />
					</Switch>
					<Footer />
				</Router>
			</Fragment>
		);
	}
}
export default App;
