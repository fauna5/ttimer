import React from 'react';

function RidersFinishing({ riders, timeRider }) {
  return (
    <div className="App" style={{ height: '70vh' }}>
      {riders.map(({ time, number }) => (
        <button
          disabled={!!time}
          key={number}
          onClick={() => timeRider(number)}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'blue',
            opacity: !!time ? 0.5 : 1,
            color: 'white',
          }}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default RidersFinishing;
