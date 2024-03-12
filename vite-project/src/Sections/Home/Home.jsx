import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../Slices/CounterSlice";

const Home = () => {
  const ReduxVal = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div id="home">
      <div className="btn_wrapper">
        <button onClick={() => dispatch(increment())}> increment </button>
        <p> {ReduxVal} </p>
        <button onClick={() => dispatch(decrement())}> decremnet</button>
      </div>
    </div>
  );
};

export default Home;
