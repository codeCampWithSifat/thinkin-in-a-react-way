import React from "react";
import withCounter from "../HOC/withCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount} type="button">
        Click {count} Times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
