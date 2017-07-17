import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './app/App';
import registerServiceWorker from './utils/registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();