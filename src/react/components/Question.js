
function Question(props){
	const options = props.question.options
	const listOptions = options.map((option) =>
    <li key={option.option}>{option.option}<button> X </button></li>
  );
	return (<div>
		<h1> {props.question.question} </h1>
        {listOptions}
      </div> )
}

export default Question;