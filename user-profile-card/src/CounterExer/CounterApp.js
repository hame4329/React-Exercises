
import React, {useState} from "react";

function CounterApp () {
  const {counter, setCounter} = useState(0);

  
  return (
  
    <div>
      
      <input type="text" value={counter}/>,
      <button type="button"> increment</button>,
      <button type="button"> decrement</button>,
      <button type="button"> reset</button>,
  </div>

  );
}

  export default CounterApp;

