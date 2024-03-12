import React from "react";
import { useSelector } from "react-redux";
const About = () => {
  const reduxValue = useSelector(state => state.counter.value);
  return (
    <div id="about">
      <p> your home page value is {reduxValue} </p>
    </div>
  );
};

export default About;
