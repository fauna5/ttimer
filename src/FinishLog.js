import React from 'react';
import { format } from 'date-fns';

function FinishLog({ riders }) {
  const finshedRiders = riders.filter(({ time }) => !!time);
  if (finshedRiders.length === 0) {
    return null;
  }
  console.log(finshedRiders.sort((a, b) => b.time - a.time));

  return (
    <div
      className="FinishLog"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderTop: '1px solid grey',
      }}
    >
      {finshedRiders
        .sort((a, b) => a.time < b.time)
        .map(({ time, number, last, first }) => (
          <div
            key={number + last}
            style={{
              alignItems: 'center',
              borderBottom: '1px solid grey',
              color: 'grey',
              display: 'flex',
              height: '40px',
              justifyContent: 'start',
              paddingLeft: '5vw',
              width: '100vw',
            }}
          >
            <div>
              {number} - {format(time, 'HH:mm:ss')} - {last}, {first}
            </div>
          </div>
        ))}
    </div>
  );
}

export default FinishLog;
