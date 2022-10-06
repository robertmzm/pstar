import logo from './logo.svg';
import './App.css';
import React from 'react';
import Question from './components/Question'
import { channels } from '../shared/constants';
const { ipcRenderer } = window;
var questions = require('../problemSets/Colision Avoidance.json')

function App() {
  const questionItems = questions.map((question) =>
    <Question question={question}/>
  );
  return (
    <div >
      {questionItems}
    </div>
  );
}



export default App;
