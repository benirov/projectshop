import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components'
import Routes from './components/Router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root')); 
registerServiceWorker();
