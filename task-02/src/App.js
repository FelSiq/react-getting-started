import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComp from './CharComp/CharComp';

class App extends Component {
	
	state = {
		text: 'Some random start text that should be larger than expected.'
	}

	textLengthHandler = () => {
		return this.state.text.length;
	}

	deleteCharacterHandler = (charId) => {
		let textCopy = this.state.text;
		textCopy = textCopy.split('')
		textCopy.splice(charId, 1)
		textCopy = textCopy.join('')
		this.setState( { text: textCopy } );
	}

	inputUserHandler = (event) => {
		this.setState( { text: event.target.value } );
	}

  render() {
		let textLength = this.textLengthHandler();

		const characters = (<div>
			{this.state.text.split('').map((character, index) => {
				return <CharComp 
					key={index}
					value={character} 
					delChar={this.deleteCharacterHandler.bind(this, index)}/>
			})}
		</div>)

		const textStyle = {display: 'inline-block'}

    return (
      <div className="App">
				<h1> Type a text and click on characters to remove then.</h1>
				<p style={textStyle}> Input some text here: </p>
				<input type='text' 
					onChange={this.inputUserHandler} 
					value={this.state.text} />
				<p> Current text: </p> { characters }
				<p style={textStyle}> Text length: { textLength } </p>
				<Validation length={ textLength } />
      </div>
    );
  }
}

export default App;
