import React from 'react';

import './Comp.css';

const comp = (props) => {
	return (
		<div className='Comp'>
			<p onClick={props.click}>Hello! I'm {props.name} and i'm {props.age}!</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} />
		</div>
	);
}

export default comp;
