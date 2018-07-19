import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
	state = {
		opacity: 1.0
	}
	render () {
		return (
			<div style={{opacity:this.state.opacity}}> Hello {this.props.name}</div>
		)
	}
	componentDidMount () {
		setInterval(() => {
			let opacity = this.state.opacity;
			opacity -= .05;
			if (opacity < 0.1) {
				opacity = 1.0
			}
			this.setState({
				opacity:opacity
			})
		},100)
	}
}
// 请让组件的文字渐隐渐变 opacity 改变 1000  0->1
class App extends Component {

  	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<Hello name="world"></Hello>
      </div>
    );
  }
}

export default App;
