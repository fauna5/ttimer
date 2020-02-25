let eventStartTime;

let riderTimes = [];

export function startEvent(riders) {
  console.log('starting event');
  eventStartTime = Date.now();
  riderTimes = riders;
}

export function timeRider(riderNumber) {
  console.log('timing', riderNumber);
  const rider = riderTimes.find(({ number }) => number === riderNumber);
  rider.time = Date.now() - eventStartTime;
}

export function getFinishedRiders() {
  return riderTimes.filter(({ time }) => !time);
}

export function getRiders() {
  return [...riderTimes];
}