import React from 'react';

export default function ToDo(props) {
  console.log(props);

  const style = {
    padding: '10px',
    margin: '10px',
    border: '2px solid black',
    backgroundColor: 'gray',
  };
  return (
    <div style={style}>
      <p>Поесть</p>
      <p>Сделано</p>
    </div>
  );
}
