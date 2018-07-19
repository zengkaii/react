import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class UserGist extends Component {
	state = {
		username: '',
		lastGistUrl: ''
	}
	render () {
		return (
			<div>
				{this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>
			</div>
		)
	}
	componentDidMount () {
		fetch(this.props.source)
		.then(data => data.json())
		.then(data => {
			const lastGist = data[0];
			this.setState({
				username: lastGist.owner.login,
				lastGistUrl:lastGist.html_url
			})
		})
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
		<UserGist source="https://api.github.com/users/octocat/gists"></UserGist>
      </div>
    );
  }
}

export default App;
