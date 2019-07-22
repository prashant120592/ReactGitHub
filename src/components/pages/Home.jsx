import React from 'react';
import Alert from '../innerComponents/Alert';
import Search from '../innerComponents/Search';
import Users from '../innerComponents/Users';
const Home = (props) => {
	const { isAlert, isLoading, setAlert, users, searchUsers, resetUsers } = props;
	return (
		<div className='container'>
			<Alert isAlert={isAlert} />
			<Search setAlert={setAlert} searchUsers={searchUsers} resetUsers={resetUsers} />
			<div className='row'>
				<Users users={users} isLoading={isLoading} />
			</div>
		</div>
	);
};

export default Home;
