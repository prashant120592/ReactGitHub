import React from 'react';

const UserItem = (props) => {
	const { avatar_url, login } = props.user;
	return (
		<div className='user_detail'>
			<div className='userimg'>
				<img src={avatar_url} alt={login} />
			</div>
			<div className='username'>{login}</div>
		</div>
	);
};

export default UserItem;
