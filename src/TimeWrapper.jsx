import Time from './Time';

export default function TimeWrapper({
  start,
  end,
  isCurrent,
  row,
  col,
  onClick,
}) {

  return (
    <div className={isCurrent && 'current-period'} style={{ gridRow: row, gridColumn: col }}>
      <Time start={start} end={end} onClick={onClick} />
    </div>
  );
}
