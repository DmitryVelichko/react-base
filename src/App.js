import React, {useState} from "react";

function App() {
const [value, setValue] = useState(0)

function plus () {
  setValue(value + 1)
}

function minus () {
  setValue(value - 1)
}

  return (
    <div className="App">

     <h1>{value}</h1>
     <button onClick={plus}>+</button>
     <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
