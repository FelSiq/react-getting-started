import React from 'react';
import styles from './Cockpit.css';
import antiDiv from '../../hoc/AntiDiv';

const cockpit = (props) => {

	/* Classes changing dinamically section. */
	let classes = [styles.boldFont];
	let dbUsage = '';
	let btnClass = styles.Button;
	if (props.showInformation) {
		btnClass = [styles.Class, styles.Red].join(' ');
	}

	if (props.dbLength <= 3) {
		classes.push(styles.lightDB);
		dbUsage = 'light';
	} else {
		classes.push(styles.heavyDB)
		dbUsage = 'heavy';
	}
	classes=classes.join(' ');

	return <antiDiv>
		<h1> {props.appTitle} </h1>
		<p className={classes}> Database usage: {dbUsage} </p>
		<button
			className={btnClass}
			onClick={props.showButton}>
			{props.buttonText} information</button>
		</ antiDiv>
}

export default cockpit;
