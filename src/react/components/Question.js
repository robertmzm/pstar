import {useState} from 'react';


function Option(option){
	
	const [isActive, setIsActive] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	var handleClick = () => {
		console.log(option)
		setIsActive(true)
		setIsCorrect(option.correct)
	};
	return <div key={option.option}>{option.option}<button style={{
	        backgroundColor: 'white',
	        color: isActive ? isCorrect?'green':'red' : '',
        }}
        onClick={handleClick}> X </button></div>
}

function Question(props){
	

	const options = props.question.options
	const listOptions = options.map((option) => 
		Option(option)
    	
	);

	//render one question
	return (<div>
		<h1> {props.question.question} </h1>
        {listOptions}
	</div>)
}

export default Question;