import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 添加属性包 prop-types
import PropsTypes from 'prop-types'
class MyTitle extends Component {
	render () {
		return (
			<div>{this.props.title}</div>
		)
	}
}
MyTitle.propsTypes = {
	title: PropsTypes.string
}
class App extends Component {
  render() {
	  const data = '123'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<MyTitle title={data}/>
      </div>
    );
  }
}

export default App;
