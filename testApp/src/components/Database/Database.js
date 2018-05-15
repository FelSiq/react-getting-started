import React, { PureComponent, Component } from 'react';
import Datacomp from './Datacomp/Datacomp';
import './Datacomp/Datacomp.css';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Database extends PureComponent {
	componentDidUpdate () {
		console.log('[Database.js] Component updated!')
	}
	
	render() {
	 	return this.props.data.map((personData, index) => {
			return (
			// <ErrorBoundary key = { personData.id }>
				<Datacomp
				key = { personData.id }
				buttonDelete = { () => this.props.delButton( index ) }
				name = { personData.name }
				changeBox = { ( event ) => 
					this.props.changed( event, personData.id ) }
				age = { personData.age } />
			// </ ErrorBoundary>
		)})
	};
}

export default Database;
