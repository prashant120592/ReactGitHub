import React from 'react';
import LoadingImage from '../../images/loading.gif';

const Loading = () => {
	return (
		<div className='loading_icon'>
			<img src={LoadingImage} alt='Loading....' />
		</div>
	);
};

export default Loading;
