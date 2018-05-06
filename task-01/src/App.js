import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state={
    username:[
	{name: 'User00', age: 23},
	{name: 'User01', age: 22},
	{name: 'User02', age: 21},
	{name: 'User03', age: 20}
    ]
  }

  usernameHandler = (event) => {
    this.setState({
	username: [
		{name: 'User00', age: 23},
		{name: 'User01', age: 22},
		{name: 'User02', age: 21},
		{name: event.target.value, age: 20}
	]
    })
  }

  render() {
    const style = {
	fontSize: '20px',
	backgroundColor: 'yellow',
	padding: '12px'
    };

    return (
      <div className="App">
		<UserOutput username={this.state.username[0].name}/>
		<UserOutput username={this.state.username[1].name}/>
		<UserOutput username={this.state.username[2].name}/>
		<UserOutput style={style} username={this.state.username[3].name}/>
		<UserInput 
			username={this.state.username[3].name} 
			usernameHandler={this.usernameHandler}/>
		<button style={style}>A Stylized Button</button>
      </div>
    );
  }
}

export default App;
