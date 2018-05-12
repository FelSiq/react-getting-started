import React from 'react'

const charComp = (props) => {
	const style = {
		display: 'inline-block',
		padding: '2px',
		margin: '2px',
		border: '2px solid black',
		textAlign: 'center',
	};

	return (
		<div 
			className="charComp" 
			onClick={props.delChar}
			style={style}>
			{props.value} 
		</div>
	);
}

export default charComp;
