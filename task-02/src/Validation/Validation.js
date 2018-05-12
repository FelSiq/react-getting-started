import React from 'react';

const validation = (props) => {
	let textQuality = 'Too short!';
	if (10 < props.length && props.length <= 20) textQuality = 'Ok!';
	if (20 < props.length && props.length <= 40) textQuality = 'Big enough!';
	if (props.length > 40) textQuality = 'Oversized.';

	return (
		<div className="Validation"> 
			<p> Text length quality: {textQuality} </p> 
		</div>
	);
}

export default validation;
