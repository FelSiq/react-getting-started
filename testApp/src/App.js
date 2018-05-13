import React, { Component } from 'react';
import './App.css';
import Comp from './Comp/Comp';
import './Comp/Comp.css';
import Radium, { StyleRoot } from 'radium';

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
		/* Style for a generical Button */
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black',
			},
		};

		/* Show/Hide information */
		let information = null;
		if (this.state.showInformation) {
			information = (<div>
				{this.state.persons.map((personData, index) => {
					return 	<Comp
						buttonDelete = { this.deletePersonHandler.bind(this, index) }
						key = { personData.id }
						name = { personData.name }
						changeBox = { (event) => 
							this.changeNameHandler(event, personData.id) }
						age = { personData.age } />})}
			</div>);

			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black',
			}
		}
		
		/* Classes changing dinamically section. */
		let classes = ['boldFont'];
		let dbUsage = '';
		if (this.state.persons.length <= 3) {
			classes.push('lightDB');
			dbUsage = 'light';
		} else {
			classes.push('heavyDB')
			dbUsage = 'heavy';
		}
		classes=classes.join(' ');

		return (
			<StyleRoot>
				<div className="App">
				<h1> Test Cumbersome Database </h1>
				<p className={classes}> Database usage: {dbUsage} </p>
				<button 
					style={style}
					onClick={this.toggleNameHandler}>
					{this.state.buttonText} information</button>		 
					{ information }
				</div>
			</StyleRoot>
		 );
	 }
}

export default Radium(App);
