import React,{useState} from 'react';

const tableStyle = {
  border: "2px solid",
  margin: "40px",
}

const centerText={
  textAlign: "center"
}
function WeightBalanceSheet(props){

	const [inputs, setinputs] = useState({emptyWeight:0,arm:0,frontSeat:0,rearSeat:0,baggage1:0,baggage2:0,fuelBurn:0,fuel:0});
  const arms = {frontSeat:37,rearSeat:73,baggage1:95,baggage2:123,fuel:48}

  var handleChange = (e) => {

    setinputs({...inputs,[e.target.name]:Number(eval(e.target.value==""?0:e.target.value))})
  };

  var to2Decimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  var weights = {zeroFuel:inputs.emptyWeight+inputs.frontSeat+inputs.rearSeat+inputs.baggage1+inputs.baggage2,taxi:-7}
  var moments = {emptyWeight:inputs.emptyWeight*inputs.arm, frontSeat:inputs.frontSeat*arms.frontSeat, 
    rearSeat:inputs.rearSeat*arms.rearSeat,
    baggage1:inputs.baggage1*arms.baggage1,
    baggage2:inputs.baggage2*arms.baggage2,
    zeroFuel:0,
    fuel:inputs.fuel*arms.fuel,
    taxi: weights.taxi*arms.fuel,
    fuelBurn: inputs.fuelBurn*arms.fuel
  }
  moments.zeroFuel=moments.emptyWeight+moments.frontSeat+moments.rearSeat+moments.baggage1+moments.baggage2
  arms.zeroFuel=weights.zeroFuel==0?0:moments.zeroFuel/weights.zeroFuel

  weights.rampWeight=weights.zeroFuel+inputs.fuel
  moments.rampWeight=moments.fuel+moments.zeroFuel
  arms.rampWeight=weights.rampWeight==0?0:moments.rampWeight/weights.rampWeight

  weights.takeOff=weights.rampWeight+weights.taxi
  moments.takeOff=moments.rampWeight+moments.taxi
  arms.takeOff=moments.takeOff/weights.takeOff

  weights.landing = weights.takeOff+inputs.fuelBurn
  moments.landing = moments.takeOff+moments.fuelBurn
  arms.landing=moments.landing/weights.landing

  Object.keys(moments).forEach(function(key) {
   moments[key]=to2Decimal(moments[key])
   arms[key]=to2Decimal(arms[key])
});

	return(
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
          <td style={centerText}><input style={centerText} name="emptyWeight" type="text" onChange={handleChange} /></td>
          <td style={centerText}><input style={centerText}  name="arm" type="text" onChange={handleChange} /></td>
          <td style={centerText}>{moments.emptyWeight}</td>
        </tr>
        <tr>
          <td>Pilot & Front Seat</td>
          <td style={centerText}><input style={centerText} name="frontSeat" type="text" onChange={handleChange} /></td>
          <td style={centerText}>{arms.frontSeat}</td>
          <td style={centerText}>{moments.frontSeat}</td>
        </tr>
        <tr>
          <td>Rear Seat</td>
          <td style={centerText}><input style={centerText} name="rearSeat" type="text" onChange={handleChange} /></td>
          <td style={centerText}>{arms.rearSeat}</td>
          <td style={centerText}>{moments.rearSeat}</td>
        </tr>
        <tr>
          <td>Baggage Area 1</td>
          <td style={centerText}><input style={centerText} name="baggage1" type="text" onChange={handleChange} /></td>
          <td style={centerText}>{arms.baggage1}</td>
          <td style={centerText}>{moments.baggage1}</td>
        </tr>
        <tr>
          <td>Baggage Area 2</td>
          <td style={centerText}><input style={centerText} name="baggage2" type="text" onChange={handleChange} /></td>
          <td style={centerText}>{arms.baggage2}</td>
          <td style={centerText}>{moments.baggage2}</td>
        </tr>
        <tr>
          <td>ZeroFuel Weight</td>
          <td style={centerText}>{weights.zeroFuel}</td>
          <td style={centerText}>{arms.zeroFuel}</td>
          <td style={centerText}>{moments.zeroFuel}</td>
        </tr>
        <tr>
          <td>Fuel (6lbs/US Gal)</td>
          <td><input style={centerText} name="fuel" type="text" onChange={handleChange} /></td>
          <td style={centerText}>{arms.fuel}</td>
          <td style={centerText}>{moments.fuel}</td>
        </tr>
        <tr>
          <td>Ramp Weight</td>
          <td style={centerText}>{weights.rampWeight}</td>
          <td style={centerText}>{arms.rampWeight}</td>
          <td style={centerText}>{moments.rampWeight}</td>
        </tr>
        <tr>
          <td>Less Start & Taxi</td>
          <td style={centerText}>{weights.taxi}</td>
          <td style={centerText}>{arms.fuel}</td>
          <td style={centerText}>{moments.taxi}</td>
        </tr>
        <tr>
          <td>Take-Off Weight</td>
          <td style={centerText}>{weights.takeOff}</td>
          <td style={centerText}>{arms.takeOff}</td>
          <td style={centerText}>{moments.takeOff}</td>
        </tr>
        <tr>
          <td>Fuel Burn</td>
          <td><input style={centerText} name="fuelBurn" type="text" onChange={handleChange} /></td>
          <td style={centerText}>{arms.fuel}</td>
          <td style={centerText}>{moments.fuelBurn}</td>
        </tr>
        <tr>
          <td>Landing Weight</td>
          <td style={centerText}>{weights.landing}</td>
          <td style={centerText}>{arms.landing}</td>
          <td style={centerText}>{moments.landing}</td>
        </tr>
      </tbody>
    </table>
    // </div>
      )
}

export default WeightBalanceSheet;