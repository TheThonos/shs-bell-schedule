import Time from './Time';

export default function LunchTime({
  start,
  end,
  isCurrent,
  row,
  col,
  isSelected,
  onClick
}) {
  return (
    <div className={isCurrent && 'current-period'} style={{gridColumn: col, gridRow: row}}>
      <Time start={start} end={end} isCurrent={isCurrent} onClick={onClick} />
      {isSelected && <p style={{display: 'inline'}} onClick={onClick}>&lt;</p>}
    </div>
  );
}

/*

<Time
      start={time[0]}
      end={time[1]}
      key={i}
      isCurrent={curPeriod == i}
      row={i + 1}
      col={1}
    />

*/
