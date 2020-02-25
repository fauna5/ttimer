import React from 'react';
import './App.css';
import RidersFinishing from './RidersFinishing';
import FinishLog from './FinishLog';
import riders from './riders.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      riders: riders.map(rider => ({ ...rider, startTime: Date.now() })),
    };
  }

  timeRider(riderNumber) {
    console.log('timing', riderNumber);
    this.setState({
      riders: this.state.riders.map(rider => {
        if (rider.number !== riderNumber) {
          return rider;
        }
        const time = Date.now() - rider.startTime;
        return { ...rider, time };
      }),
    });
  }

  render() {
    return (
      <div className="App">
        <RidersFinishing
          riders={this.state.riders}
          timeRider={(number) => this.timeRider(number)}
        />
        <FinishLog style={{height: '30vh'}} riders={this.state.riders} />
      </div>
    );
  }
}

export default App;
