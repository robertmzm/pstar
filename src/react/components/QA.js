import React,{useState} from 'react';
import {
	Button,
	View,
	ActivityIndicator
} from 'react-native';

import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    organization: "org-ee2qInY8V4SaXwCYMsAoZatJ",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const QAStyle = {
	width:"600px",
	height:"500px",
	marginTop: "20px",
}

const testAreaStyle = {
	width:"300px",
	height:"200px",
	marginTop: "10px",
}

const container={
    flex: 1,
    justifyContent: 'center',
    width:"20px",
	height:"20px",
  }

const styles = {
	pageButton:{
		borderRadius: '5px',
		backgroundColor: 'white',
		margin: 2,
		display: 'inline',
		verticalAlign:"middle",
		width:'100px',
		height:'40px'
	}
}



function QA(props){
	const [input, setInput] = useState("")
	const [answer, setAnswer] = useState("");
	const [isFetching, setIsFetching] = useState(false);

	var handleChange = (e) => {
		setInput(e.target.value)
	};

	function handleSubmit(e) {
		e.preventDefault();
		setIsFetching(true);
		const completion = openai.createCompletion({
		model: "text-davinci-003",
		prompt: input,
		temperature: 0.6,
		"max_tokens": 300
		}).then((response) => {
			setIsFetching(false);
			setAnswer(response.data.choices[0].text)
		})
	}
	return (
		<div style={QAStyle}>
			<p> Ask me anything about aviation and you get the answer right the way.</p>
			<textarea style={testAreaStyle} name="question"  onChange={handleChange} />
			<p> <button style={styles.pageButton}onClick={handleSubmit}> Submit </button> {isFetching&& "Waiting for answer"}</p>	    
			
			<div>
				<p>{answer}</p>
			</div>
	    </div>)
}

export default QA;