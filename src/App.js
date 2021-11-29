import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter{counter}</h1>
      <button onClick={() => dispatch(increment(6))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {logged ? <h3>you can't acces</h3> : ""}
    </div>
  );
}

export default App;
