import React from "react";
import { useSelector } from "react-redux";
const Blog = () => {
  const reduxValue = useSelector(state => state.counter.value);
  return (
    <div id="blog" >
      <p> your home page value is {reduxValue} </p>
    </div>
  );
};

export default Blog;
