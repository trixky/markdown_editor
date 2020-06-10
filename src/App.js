import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6'>
						<textarea
							className='form-control'
							row='35'>
						</textarea>
					</div>
					<div className='col-sm-6'>
						Resultat
					</div>
				</div>
			</div>
		)
	}
}

export default App;
