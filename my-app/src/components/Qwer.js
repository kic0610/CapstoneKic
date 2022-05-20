import React from "react";

const Qwer = () => {
  const dummyArray = ["one", "two", "three", "four", "five"];
  return (
    <ul>
      {dummyArray.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
};

export default Qwer;
