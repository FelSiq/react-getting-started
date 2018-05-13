import React from 'react';
import styles from './Comp.css';
// import Radium from 'radium';

const comp = (props) => {
	/* const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	} */
	return (
		<div className={styles.Comp} /*style={style}*/>
			<p>Hello! I'm {props.name} and i'm {props.age}!</p>
			<p>{props.children}</p>
			<p>
				Type a name:
				<input type='text' value={props.name} onChange={props.changeBox}/>
				<button onClick={props.buttonDelete}> Delete Person </ button>
			</p>
		</div>
	);
}

// export default Radium(comp);
export default comp;
