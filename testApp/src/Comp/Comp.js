import React from 'react';
import './Comp.css';

const comp = (props) => {
	return (
		<div className='Comp'>
			<p>Hello! I'm {props.name} and i'm {props.age}!</p>
			<p>{props.children}</p>
			<p>
			Type a new name:
			<input type='text' value={props.name} onChange={props.changeBox}/>
			<button onClick={props.buttonDelete}> Delete Person </ button>
			</p>
		</div>
	);
}

export default comp;
