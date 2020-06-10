import React, { Component } from 'react';
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'
import DOMpurify from 'dompurify'

class App extends Component {
	state = {
		text: sampleText
	}

	componentDidMount () {
		const text = localStorage.getItem('text');
		if (text && text.length) {
			this.setState({text})
		} else {
			this.setState({text: sampleText})
		}
	}

	componentDidUpdate () {
		const {text} = this.state
		localStorage.setItem('text', text)
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
							spellCheck='false'
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
