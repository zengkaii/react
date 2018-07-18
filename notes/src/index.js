import React from 'react';
// react 模板， react-dom
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
