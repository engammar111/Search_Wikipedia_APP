import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click ME{" "}
      </button>
      <h1> current Count : {count}</h1>
    </div>
  );
}

export default Count;
