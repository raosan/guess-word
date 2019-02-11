import React, { Component } from 'react';

import './App.css';

import GuessedWords from './components/GuessedWords/GuessedWords'
import Congrats from './components/Congrats/Congrats'
import Input from './components/Input/Input'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Guess Word</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App;
