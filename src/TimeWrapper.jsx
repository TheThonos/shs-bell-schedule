import Time from './Time';
import Selector from './Selector';

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
      <Selector/>
      <Time start={start} end={end} onClick={onClick} />
    </div>
  );
}
