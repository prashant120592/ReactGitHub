import React from 'react';
import { Link } from 'react-router-dom';
const UserItem = (props) => {
	const { avatar_url, login } = props.user;
	return (
		<div className='user_detail'>
			<div className='userimg'>
				<img src={avatar_url} alt={login} />
			</div>
			<div className='username'>{login}</div>
			<div className='view_detail'>
				<Link to={`profile/${login}`} className='view_details_link'>
					View Detail
				</Link>
			</div>
		</div>
	);
};

export default UserItem;
