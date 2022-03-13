import React, { useState } from 'react';

export default function StatefulComponents() {
  const [color, setColor] = useState('blue');
  const [count, setCount] = useState(0);
  
  function changeClick() {
    return setColor((prevColor) => (prevColor === 'blue' ? 'green' : 'blue'));
  }

  return (
    <>
      <p style={{ fontSize: '35px', textAlign: 'center', color: '#92054D' }}>
        <b>You click {count} times</b>
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
      >
        click to change button color
      </button>
    </>
  );
}
