import './App.css';
import { useState } from 'react';
import Canvas from './Canvas';

function App() {
  const [clear, setClear] = useState(false);
  let array1 = [];
  let array2 = [];
  let array3 = [];

  const clearHandler = () => {
    setClear(false);
  }

  const handleClick = (circle) => {
    setClear(true);
    let today = new Date(),
      time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let jsonData;

    if (circle) {
      jsonData = {
        "x_coordinates": array1,
        "y_coordinates": array2,
        "pen": array3,
        "time": time,
        "circle": true
      }
    } else {
      jsonData = {
        "x_coordinates": array1,
        "y_coordinates": array2,
        "pen": array3,
        "time": time,
        "circle": false
      }

    }
    jsonData = JSON.stringify(jsonData);
    console.log(jsonData);
    fetch('https://ps70-api.vercel.app/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
      .then(response => console.log(response))
  }

  return (
    <div className="App">
      <h1>PS70 Sidewalk Plotter App</h1>
      <h3>Draw what you want to create below!</h3>
      <div class="container">
        <img src="https://img.freepik.com/free-vector/abstract-horizontal-grid-lines-graph-style-graphic-design_1017-39918.jpg?w=2000" alt="Grid" />
        <Canvas width="1080" height="600" x_coordinates={array1} y_coordinates={array2} pen={array3} clear={clear} clearHandler={clearHandler} />
      </div>
      <button class="button-green" onClick={() => handleClick(false)}>Send to Plotter</button>
      <button class="button-blue" onClick={() => handleClick(true)}>Draw Circle ⚪</button>
      <button class="button-red" onClick={() => setClear(true)}>Clear</button>
    </div>
  );
}

export default App;
