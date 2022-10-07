import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Question from './components/Question'
import { channels } from '../shared/constants';
const { ipcRenderer } = window;

var chapters = ["Colision Avoidance", "Visual Signals", "Communication","Aerodromes"]

function App() {
  const styles = {
    pageButton:{
      backgroundColor: 'white',
      margin: 10,
      display: 'inline'
    }
  }
  const [chapterIndex, setChapterIndex] = useState(0);

  var handleRightButtonClick = () => {
    setChapterIndex((chapterIndex+1)%chapters.length)
  };
  var handleLeftButtonClick = () => {
    setChapterIndex((chapterIndex-1+chapters.length)%chapters.length)
  };

  var questions = require(`../problemSets/${chapters[chapterIndex]}.json`)
  const questionItems = questions.map((question) =>
    <Question question={question} chapterIndex={chapterIndex}/>
  );
  return (
    
    <div key="questions">
      <div>
        <button style={styles.pageButton}
          onClick={handleLeftButtonClick}> {"<<"} </button>
        <button style={styles.pageButton}
          onClick={handleRightButtonClick}> >> </button></div>
      <h1 style={{"margin": 20}}>{chapterIndex+1}. {chapters[chapterIndex]}</h1>
      {questionItems}
      }
    </div>
  );
}



export default App;
