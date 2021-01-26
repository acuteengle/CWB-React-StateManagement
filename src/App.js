import { useState } from "react";
import './App.css';

import MyComponent from "./components/MyComponent";

function App() {

  const [numberValue, setNumberValue] = useState(0);
  const [name, setName] = useState("");
  const [printText, setPrintText] = useState("");

  const onClickIncrement = (event) => {
    const newValue = numberValue + 1;
    setNumberValue(newValue);
  }

  const onClickDecrement = (event) => {
    const newValue = numberValue - 1;
    setNumberValue(newValue);
  }

  const onChangeInput = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const onClickPrint = (event) => {
    setPrintText("Hello, " + name);
  }

  return (
    <div className="App">
      <h1>My value is: {numberValue}</h1>
      <button onClick={onClickIncrement}>Increment</button>
      <button onClick={onClickDecrement}>Decrement</button>
      {numberValue > 6 &&
        <p>I am greater than 6</p>
      }
      <hr />
      <h1>onChange</h1>
      <label>Name: </label>
      <input type="text" onChange={onChangeInput} />
      {name !== "" &&
        <p>Hi, my name is {name}</p>
      }
      <br /><br />
      <button onClick={onClickPrint}>Print</button>
      <p>{printText}</p>
      <hr />
      <MyComponent myProp={name} />
    </div>
  );
}

export default App;
