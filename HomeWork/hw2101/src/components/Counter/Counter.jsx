import React, { useState } from "react";

export default function Counter({ initValue }){
  const [value, setValue] = useState(initValue || 1);

  return (
    <div>
      <button type="button" onClick={() => setValue(value - 1)}>-</button>
      <span> {value} </span>
      <button type="button" onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
}