import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Comp/Comp';

class App extends Component {

	state = {
		persons : [
			{ name: 'Felipe', age: 22 }
		]
	}

	buttonHandler = (message) => {
		console.log(message);
	}

	nameChangedHandler = (event) => {
		this.setState( {
				persons : [
					{ name: event.target.value, age: 20 }
				]		
			}	)
	}

	 render() {
		 return (
			<div className="App">
				<h1> This is a test App!</h1>
				<button onClick={this.buttonHandler.bind(this, 'A new value!')}>Hello world!</button>		 
				<Comp 
						 name={this.state.persons[0].name} 
						 age={this.state.persons[0].age} 
						 changed={this.nameChangedHandler}
						 click={this.buttonHandler.bind(this, 'Another message, completely different!')} />
			</div>
		 );
	 }
}

export default App;
