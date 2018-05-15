import React, { Component } from 'react';
import styles from './Datacomp.css';
// import Radium from 'radium';

class Datacomp extends Component {
	/* const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	} */

	componentDidUpdate() {
		console.log('[Datacomp.js] Component updated!')
	}

	componentWillUnmount() {
		console.log('Removing', 
			this.props.name.length > 0 ? this.props.name : 'Unknown person', 
			'from this puzzling database.')
	}

	render() {
		return (
			<div className={styles.Datacomp} /*style={style}*/>
				<p>Hello! I'm {this.props.name} and i'm {this.props.age}!</p>
				<p>{this.props.children}</p>
				<p>
					Type a name:
					<input type='text' value={this.props.name} onChange={this.props.changeBox}/>
					<button onClick={this.props.buttonDelete}> Delete Person </ button>
				</p>
			</div>
		);
	}
}

// export default Radium(comp);
export default Datacomp;
