import React from 'react';
import UserItem from './UserItem';
import Loading from './Loading';
const Users = (props) => {
	if (props.isLoading) {
		return (
			<div className='col-md-12'>
				<Loading />
			</div>
		);
	} else if (props.users.length === 0 && props.isLoading === false) {
		return <div className='col-md-12'>No user Found</div>;
	} else {
		return props.users.map((user, i) => (
			<div className='col-md-2' key={i}>
				<UserItem user={user} />
			</div>
		));
	}
};

export default Users;
