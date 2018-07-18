import React, { Component } from 'react';
import Notes from './components/Notes'
// import logo from './logo.svg';
import './App.css';
// .vue 文件有三部分 template js style
// React .js 组件类 继承 template? jsx 语法 render
class App extends Component {
  render() {
	return (
		<Notes/>
	);
  }
}

export default App;
