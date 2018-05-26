import React, { Component } from 'react';
import './App.css';
import Button from './Button/Button';
import Header from './Header/Header';
import Menu from './Menu/Menu';

class App extends Component {

  state = {
	showMenu: false,
  } 

  toggleMenu = () => {
   const curMenuState = this.state.showMenu
   this.setState( { showMenu: !curMenuState } ) 
   console.log(this.state.showMenu)
  }

  render() {
    return (
      <div className="App">
	<Header onClick={this.toggleMenu} text='A magnificent website!'/>
	<Menu open={this.state.showMenu} />
      </div>
    );
  }
}

export default App;
