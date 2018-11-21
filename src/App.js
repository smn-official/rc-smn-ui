import React, { Component } from 'react';
import './App.scss';

import { TextField } from './smn-ui';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ width: 640, margin: "15px auto" }}>
			<h1>Hello React</h1>
			<TextField label="Email Address" placeholder="name@example.com" />
		</div>
      </div>
    );
  }
}

export default App;
