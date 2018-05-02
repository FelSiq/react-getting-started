import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>Hello! I'm {props.name} and i'm {props.age}!</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value='Insert a new name...' />
		</div>
	);
}

export default person;
