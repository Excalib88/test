import React, { Component } from 'react';
import '../node_modules/modern-normalize/modern-normalize.css';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="pattern">
          <div className="cat">
              <h1>Ты сегодня покормил кота?</h1>
              <Content />
          </div>

      </div>
    );
  }
}

export default App;
