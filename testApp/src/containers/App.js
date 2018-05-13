import React, { Component } from 'react';
import styles from './App.css';
import Database from '../components/Database/Database';
// import Radium, { StyleRoot } from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	state = {
		persons : [
			{ id: '4388', name: 'Felipe', age: 22 },
			{ id: '9246', name: 'Larissa', age: 23 },
			{ id: '4105', name: 'Rose', age: 24 },
			{ id: '1592', name: 'Ricardo', age: 25 },
			{ id: '4067', name: 'Priscilla', age: 26 }
		],
		showInformation: true,
		buttonText: 'Hide'
	}

	toggleNameHandler = () => {
		const doesShow = this.state.showInformation;
		this.setState({
			buttonText: this.state.showInformation ? 'Show' : 'Hide',
			showInformation: !doesShow, 
		});
	}
	
	deletePersonHandler = (personId) => {
		const newData = [...this.state.persons];
		newData.splice(personId, 1);
		this.setState({persons: newData});
	}

	changeNameHandler = (event, personId) => {
		const targetPersonIndex = this.state.persons.findIndex(inst => {
			return inst.id === personId;
		});

		const personTargetUpdated = {
			...this.state.persons[targetPersonIndex]
		};

		personTargetUpdated.name = event.target.value;

		const allPersonsUpdatedData = [...this.state.persons];
		allPersonsUpdatedData[targetPersonIndex] = personTargetUpdated

		this.setState( { persons: allPersonsUpdatedData } );
	}
	
	render() {
		/* Show/Hide information */
		let information = null;
		if (this.state.showInformation) {
			information = ( <div>
				<Database
					data={this.state.persons}
					delButton={this.deletePersonHandler}
					changed={this.changeNameHandler} />
			</div> );
		}
		
		return (
			// <StyleRoot>
				<div className={styles.App}>
					<Cockpit 
						buttonText={this.state.buttonText}
						showButton={this.toggleNameHandler}
						dbLength={this.state.persons.length}
						showInformation={this.state.showInformation}
						/>
					{ information }
				</div>
			// </StyleRoot>
		 );
	 }
}

// export default Radium( App )
export default App;
