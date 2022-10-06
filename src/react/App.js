import logo from './logo.svg';
import './App.css';
import React from 'react';
import Question from './components/Question'
import { channels } from '../shared/constants';
const { ipcRenderer } = window;
var questions = require('../problemSets/Colision Avoidance.json')

function App() {
  return (
    <div >
      <Question question={questions[0]}/>
    </div>
  );
}



export default App;
