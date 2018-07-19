import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './HelloMessage'
class App extends Component {
  render() {
	const arr = [
		<h1 key="1">Hello World</h1>,
		<h2 key="2">React is awsome</h2>
	]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<HelloMessage name="John"/>
        <ul>{
			arr
		}
		</ul>
      </div>
    );
  }
}

export default App;
