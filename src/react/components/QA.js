import React,{useState} from 'react';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-ee2qInY8V4SaXwCYMsAoZatJ",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const QAStyle = {
  width:"600px",
  height:"500px",
  margin: "40px",
}

function QA(props){
	const [input, setInput] = useState("")
	const [answer, setAnswer] = useState("");
	console.log(process.env.OPENAI_API_KEY)

	var handleChange = (e) => {
		setInput(e.target.value)
	};

	function handleSubmit(e) {
		e.preventDefault();
		const completion = openai.createCompletion({
		model: "text-davinci-003",
		prompt: input,
		temperature: 0.6,
		"max_tokens": 300
		}).then((response) => setAnswer(response.data.choices[0].text))
	}
	return (<div style={QAStyle}>
		<input name="question" type="text" onChange={handleChange} />
		<form onSubmit={handleSubmit}>
			<button type="submit">Submit</button>
		</form>
		<div>
		<p>{answer}</p>
		</div>
    </div>)
}

export default QA;