import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import todos from './lib/todos.js';

ReactDOM.render(<App initialData={todos}/>, document.getElementById('root'));