import React from 'react';

const Reset = (props) => {
	return (
		<button
			className='btn btn-danger resetbtn'
			onClick={(e) => {
				e.preventDefault();
				props.resetUsers();
				props.resetValue();
			}}
		>
			Reset
		</button>
	);
};

export default Reset;
