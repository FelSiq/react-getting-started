import React from 'react';

import './UserInput.css'

const userInput = (props) => {
	const style = {
		border: '2px solid red'
	}

	return (
		<div className='UserInput'>
			<input style={style} type='text' onChange={props.usernameHandler} value={props.username} />
		</div>
	);
}

export default userInput;
