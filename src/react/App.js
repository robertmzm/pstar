import logo from './logo.svg';
import './App.css';
import React from 'react';
import Question from './components/Question'
import { channels } from '../shared/constants';
const { ipcRenderer } = window;

var chapters = ["Colision Avoidance", "Visual Signals"]

function App() {

  
  var questions = require(`../problemSets/${chapters[1]}.json`)
  const questionItems = questions.map((question) =>
    <Question question={question}/>
  );
  return (
    <div key="questions">
      <h1 style={{"margin": 20}}>{chapters[1]}</h1>
      {questionItems}
      }
    </div>
  );
}



export default App;
