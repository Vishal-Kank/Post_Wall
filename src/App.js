import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux';

import PostWall from './components/PostWall';
import PostForm from './components/PostForm';
import store from './store';

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>The React Redux App</h2>
          </header>
          <PostForm/>
          <PostWall/>
        </div>
      </Provider>
    );
  }
}

export default App;
