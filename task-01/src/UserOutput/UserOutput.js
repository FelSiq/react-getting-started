import React from 'react';

const userOutput = (props) => {
	return (
		<div className='UserOutput'>
			<p>Hello world!</p>
			<p>Hello, moon!</p>
			<p>Passed username is: {props.username}</p>
		</div>
	);
}

export default userOutput;
