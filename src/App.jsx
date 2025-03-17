import { useState } from 'react';
import TimeWrapper from './TimeWrapper';
import LunchTime from './LunchTime';
import './App.css';

function App() {
  let times = [
    [805, 855],
    [859, 949],
    [953, 1043],
    [1047, 1232],
    [1236, 1326],
    [1330, 1420],
    [1420, 1440],
  ];
  let lunchTimes = [
    [1047, 1115],
    [1125, 1153],
    [1204, 1232],
  ];
  let [curPeriod, setCurPeriod] = useState(getTimeIndex(times, false));
  let [lunch, setLunch] = useState(0);

  let timeElements = times.map((time, i) => (
    <TimeWrapper
      start={time[0]}
      end={time[1]}
      key={i}
      isCurrent={curPeriod == i}
      row={i + 1}
      col={1}
    />
  ));

  return (
    <div className="app">
      <div className="times-wrapper">
        {timeElements}
        <svg
          style={{
            position: 'absolute',
            gridRow: '3 / 5',
            gridColumn: 2,
          }}
          width={30}
        >
          <path
            d="m10 5 c-10 0 0 20 -10 20c10 0 0 20 10 20"
            style={{ stroke: '#FFF', strokeWidth: 1.5, scale: 2, fill: 'none' }}
          />
        </svg>
        {lunchTimes.map((time, i) => (
          <LunchTime
            start={time[0]}
            end={time[1]}
            key={i}
            isCurrent={curPeriod == 3 && getTimeIndex(lunchTimes, true) == i}
            row={i + 3}
            col={3}
            isSelected={i == lunch}
            onClick={() => {
              setLunch(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function getTimeIndex(times, exclusive) {
  let now = new Date();
  let curTime = `${now.getHours()}${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  for (let i in times) {
    if (curTime < times[i][1]) {
      if (!exclusive || curTime >= times[i][0]) return i;
    }
  }
}

export default App;
