import React from 'react';
import Datacomp from './Datacomp/Datacomp';
import './Datacomp/Datacomp.css';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const database = (props) => {
	return (
		props.data.map((personData, index) => {
			return (
			// <ErrorBoundary key = { personData.id }>
				<Datacomp
				key = { personData.id }
				buttonDelete = { () => props.delButton( index ) }
				name = { personData.name }
				changeBox = { ( event ) => 
					props.changed( event, personData.id ) }
				age = { personData.age } />
			// </ ErrorBoundary>
		)})
	);
}

export default database;
