import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'
import DOMpurify from 'dompurify'

class App extends Component {
	state = {
		text: sampleText
	}

	componentDidMount () {
		console.log('je suis monte');
	}

	componentDidUpdate () {
		console.log('je suis update')
	}

	handleChange = event => {
		const text = event.target.value
		this.setState({ text })
	}

	renderText = text => {
		const __html = marked(DOMpurify.sanitize(text), {})
		return {__html};
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6'>
						<textarea
							onChange={this.handleChange}
							value={this.state.text}
							className='form-control'
							rows='35'>
						</textarea>
					</div>
					<div className='col-sm-6'>
						<div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
