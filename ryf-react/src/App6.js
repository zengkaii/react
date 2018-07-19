import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	state = {
		value: 'Hello!'
	}
	handleChange(event) {
		// 使用bind 传递this 不能使用箭头函数
		this.setState({
			value:event.target.value
		})
	}
  	render() {
	  const value = this.state.value
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<input type="text" value={value} onChange={this.handleChange.bind(this)}/>
		<p>{value}</p>
      </div>
    );
  }
}

export default App;
