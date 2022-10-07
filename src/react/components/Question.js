import {useState} from 'react';

const styles = {
	question: {
		margin: 20
	},
	baseText: {
		fontSize: 15,
		fontFamily: 'Cochin',
		line_height: '20px',
		display:'inline',
	},
	optionText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
}

function Option(props){
	const option = props.option
	const [isAnswered, setIsAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);

	const buttonStyles = {
		button:{
		        backgroundColor: 'white',
		        color: isAnswered ? isCorrect?'green':'red' : '',
		        line_height: '20px',
				display: 'inline'
	        }
	}
	var handleClick = () => {
		setIsAnswered(true)
		setIsCorrect(option.correct)
	};
	return <div key={option.option} >
		<h2 style={styles.baseText}> {option.option} </h2>
		<button style={buttonStyles.button}
        		onClick={handleClick}> X </button>
    </div>
}

function Question(props){
	
	
	const options = props.question.options
	const listOptions = options.map((option) => 
		<Option option={option}/>
    	
	);

	//render one question
	return (<div key={props.question.question} style={styles.question}>
		<h1 style={styles.optionText}> {props.question.question} </h1>
        {listOptions}
	</div>)
}

export default Question;