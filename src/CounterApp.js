import {useState} from 'react';
import PropTypes  from "prop-types";

const CounterApp = ({value}) => {
  const [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(counter + 1)
  };

  const subtract = () => {
    setCounter(counter - 1)
  }; 

  const reset = () => {
    setCounter(value)
  }; 

  return(
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={add}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={subtract}>-1</button>
      <a href="https://reactjs.org/docs/events.html" target="_blank" rel="northerner"> React Synthetic Events</a>
    </>
  )
};

CounterApp.propTypes = {
  value: PropTypes.number
};

CounterApp.defaultProps = {
  value: 10
}

export {CounterApp};

