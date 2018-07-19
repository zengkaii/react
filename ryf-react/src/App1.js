import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
	const arr = ['Kobe', 'Bryant', 'Kai']
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		
        <ul>{
			name.map((index,name) => {
                return <div key={index}>{name}</div>
            })
		}
		</ul>
      </div>
    );
  }
}

export default App;
