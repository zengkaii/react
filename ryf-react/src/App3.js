import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class NoteList extends Component {
	// 若无其他操作，可不写constructor
	// constructor (props) {
	// 	super(props)
	// }
	render () {
		return (
			<ol>
				{this.props.children.map((child,index) => <li key={index}>{child}</li>)}
			</ol>
		)
	}
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<NoteList>
			<span>hello</span>
			<span>world</span>
		</NoteList>
      </div>
    );
  }
}

export default App;
