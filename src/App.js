import './App.css';
import Canvas from './Canvas';

function App() {
  let array1 = [];
  let array2 = [];

  const handleClick = () => {
    console.log(array1);
    console.log(array2);
  }

  return (
    <div className="App">
      <h1>PS70 Sidewalk Plotter App</h1>
      <h3>Draw what you want to create below!</h3>
      <img src="https://img.freepik.com/free-vector/abstract-horizontal-grid-lines-graph-style-graphic-design_1017-39918.jpg?w=2000" alt="Grid" />
      <Canvas width="1080" height="620" x_coordinates = {array1} y_coordinates = {array2}/>
      <button onClick={handleClick}>Send to Plotter</button>
    </div>
  );
}

export default App;
