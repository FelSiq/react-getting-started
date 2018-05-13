import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {

	/* Classes changing dinamically section. */
	let classes = [styles.boldFont];
	let dbUsage = '';
	let btnClass = '';
	if (props.showInformation) {
		btnClass = styles.Red;
	}

	if (props.dbLength <= 3) {
		classes.push(styles.lightDB);
		dbUsage = 'light';
	} else {
		classes.push(styles.heavyDB)
		dbUsage = 'heavy';
	}
	classes=classes.join(' ');

	return (<div className={styles.Cockpit}>
		<h1> test Cumbersome Database </h1>
		<p className={classes}> Database usage: {dbUsage} </p>
		<button
			className={btnClass}
			onClick={props.showButton}>
			{props.buttonText} information</button>
	</div> );
}

export default cockpit;
