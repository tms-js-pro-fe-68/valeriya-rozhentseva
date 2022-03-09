import React, { useState } from 'react';

export default function StatefulComponents() {
  const [color, setColor] = useState('blue');
  const [count, setCount] = useState(0);
  function changeClick() {
    if (color === 'blue') {
      return setColor('green');
    }
    return setColor('blue');
  }

  return (
    <>
      <p style={{ fontSize: '30px', textAlign: 'center' }}>
        <b>Сlick on the button below:</b>
      </p>
      <button
        style={{
          background: color,
          color: 'white',
          width: '500px',
          display: 'block',
          margin: '10px auto',
        }}
        onClick={() => {
          changeClick();
          setCount(count + 1);
        }}
        type="button"
        id="button"
      >
        you clicked on me {count} times
      </button>
    </>
  );
}
