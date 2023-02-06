
import Question from './Question'
import React,{useState} from 'react';

const chapters = ["Colision Avoidance", "Visual Signals", "Communication",
	"Aerodromes","Equipment","Pilot Responsibilities","Wake Turbulence","Aeromedical",
	"Flight Plans and Flight Itineraries", "Clearances and Instructions","Aircraft Operations",
	"Airspace General Regulations", "Controlled Airspace", "Aviation Occurrences"]


function PstarPage(props){
	const styles = {
		pageButton:{
		  backgroundColor: 'white',
		  margin: 10,
		  display: 'inline',
		  verticalAlign:"middle"
		}
	}
	const [chapterIndex, setChapterIndex] = useState(0);

	var handleRightButtonClick = () => {
	setChapterIndex((chapterIndex+1)%chapters.length)
	};
	var handleLeftButtonClick = () => {
	setChapterIndex((chapterIndex-1+chapters.length)%chapters.length)
	};

	var handleChange = () => {

	};

	var questions = require(`../../questionSets/${chapters[chapterIndex]}.json`)
	const questionItems = questions.map((question) =>
	<Question question={question} chapterIndex={chapterIndex}/>
	);
	return(
	<div>
		<h1 style={{"margin": 20}}> 
			<button style={styles.pageButton}onClick={handleLeftButtonClick}> {"<<"} </button>
			{chapterIndex+1}. {chapters[chapterIndex]}
			<button style={styles.pageButton}onClick={handleRightButtonClick}> >> </button>
		</h1>
      {questionItems}
      </div>
    )
}

export default PstarPage;