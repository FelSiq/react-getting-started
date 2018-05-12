import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Comp/Comp';
import './Comp/Comp.css'

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
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px'
		};


		let information = null;
		if (this.state.showInformation) {
			information = (<div>
				{this.state.persons.map((personData, index) => {
					return 	<Comp
						buttonDelete = { this.deletePersonHandler.bind(this, index) }
						key = { personData.id }
						name = { personData.name }
						changeBox = { (event) => this.changeNameHandler(event, personData.id) }
						age = { personData.age } />})}
			</div>)
		}

		return (
			<div className="App">
				<h1> React test app </h1>
				<button 
					style={style}
					onClick={this.toggleNameHandler}>
					{this.state.buttonText} information</button>		 
				{ information }
			</div>
		 );
	 }
}

export default App;
