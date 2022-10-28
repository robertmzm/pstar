import {useState} from 'react';

const styles = {
	question: {
		margin: 20
	},
	baseText: {
		whiteSpace: 'break-spaces',
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
				fontWeight: 'bold',
				borderColor:"Black",
				borderRadius: 5,
				border_radius: "20%",
		        backgroundColor: 'white',
		        color: isAnswered ? isCorrect?'green':'red' : '',
		        line_height: '20px',
	        }
	}
	var handleClick = () => {
		setIsAnswered(true)
		setIsCorrect(option.correct)
	};
	return <div key={option.option} >
		<button style={buttonStyles.button}
	        		onClick={handleClick}> X </button>
		<h2 style={styles.baseText}> {option.option} </h2>
		
    </div>
}

function Question(props){
	const re=/\n/
	const options = props.question.options
	const listOptions = options.map((option) => 
		<Option option={option}/>
    	
	);

	function replaceWithBr() {
	    return props.question.question.replace(/\n/g, "<br />");
	}

	//render one question
	return (<div key={props.question.question} style={styles.question}>
		<p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} style={styles.optionText}/>
        {listOptions}
	</div>)
}








export default Question;




