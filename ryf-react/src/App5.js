import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class LikeButton extends Component {
	state = {
		liked: false
	}
	handleClick() {
		
		this.setState({
			liked: !this.state.liked
		})
		 console.log(this)
	}
	render () {
		const text = this.state.liked? 'like': 'don\'t like'
		return (
			<p onClick={() => this.handleClick()}>
				U {text} this.click to toggle
			</p>
		)
	}
}
class App extends Component {
	handleClick () {
		// console.log('1111')
		this.refs.myTextInput.focus()
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<LikeButton></LikeButton>
		<input type="text" ref="myTextInput"/>
		<input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
