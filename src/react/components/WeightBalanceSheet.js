import React,{useState} from 'react';

const tableStyle = {
  border: "2px solid",
  margin: "40px",
}

const tdStyle={
  textAlign: "center"
}
function WeightBalanceSheet(props){

	const [variableFields, setVariableFields] = useState({emptyWeight:0,arm:0});

  var handleChange = (e) => {

    setVariableFields({...variableFields,[e.target.name]:e.target.value})
  };
  console.log(variableFields)

	return(
		/*<div>
      <table>
        <thead>
          <tr>
            <th>Weight</th>
            <th>Arm</th>
            <th>Moment</th>
          </tr>
        </thead>
        <tbody>
          <div>
          <label> Aircraft </label>
            <input name="Weight" type="text" onChange={handleChange} />
            <input name="Moment" type="text" onChange={handleChange} />
            <input name="Arm" type="text" onChange={handleChange} />
          </div>
          <label> Front Seat  </label>
            <input name="Front Seat" type="text" onChange={handleChange} />
        </tbody>
      </table>*/
      
    <table style={tableStyle}>
      <thead>
        <tr>
          <th>Item</th>
          <th>WEIGHT(lbs)</th>
          <th>ARM(in)</th>
          <th>MOMENT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Empty Weight</td>
          <td><input name="emptyWeight" type="text" onChange={handleChange} /></td>
          <td><input name="arm" type="text" onChange={handleChange} /></td>
          <td>{(Math.round(variableFields.emptyWeight*variableFields.arm * 100) / 100).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Pilot & Front Seat</td>
          <td><input name="frontWeight" type="text" onChange={handleChange} /></td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Rear Seat</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Rear Seat</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Rear</td>
          <td>hi</td>
          <td>itter</td>
        </tr>
        <tr>
          <td>Rear</td>
          <td>hi</td>
          <td>itter</td>
        </tr>
        <tr>
          <td>Rear</td>
          <td>hi</td>
          <td>itter</td>
        </tr>
        <tr>
          <td>Rear</td>
          <td>hi</td>
          <td>itter</td>
        </tr>
        <tr>
          <td>Rear</td>
          <td>hi</td>
          <td>itter</td>
        </tr>
        <tr>
          <td>Rear</td>
          <td>hi</td>
          <td>itter</td>
        </tr>
        <tr>
          <td>Rear</td>
          <td>hi</td>
          <td>itter</td>
        </tr>
        <tr>
          <td>Rear</td>
          <td>hi</td>
          <td>itter</td>
        </tr>
      </tbody>
    </table>
    // </div>
      )
}

export default WeightBalanceSheet;