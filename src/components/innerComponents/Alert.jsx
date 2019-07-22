import React from 'react';

const Alert = ({ isAlert }) => {
	return isAlert ? (
		<div className='row'>
			<div className='col-md-6 offset-md-3 alert alert-danger'>{isAlert.msg}</div>
		</div>
	) : (
		''
	);
};

export default Alert;
