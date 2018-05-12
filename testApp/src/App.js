import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Comp/Comp';
import './Comp/Comp.css'

class App extends Component {

	state = {
		persons : [
			{ name: 'Felipe', age: 22 }
		],
		showInformation: false
	}

	toggleNameHandler = () => {
		const doesShow = this.state.showInformation;
		this.setState({showInformation: !doesShow});
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
				<Comp 
				name={this.state.persons[0].name} 
				age={this.state.persons[0].age} 
				changed={this.nameChangedHandler}/>
			</div>)
		}

		return (
			<div className="App">
				<h1> This is a test App!</h1>
				<button 
					style={style}
					onClick={this.toggleNameHandler}>Hide information</button>		 
				{ information }
			</div>
		 );
	 }
}

export default App;
