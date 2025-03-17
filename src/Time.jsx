export default function Time({ start, end, onClick }) {
  const startFormatted = formatTime(start);
  const endFormatted = formatTime(end);

  return (
    <p style={{display: 'inline'}} onClick={onClick}>
      {startFormatted} - {endFormatted}
    </p>
  );
}

function formatTime(time) {
  let min = time % 100;
  let hour = Math.floor(time / 100);
  if (hour > 12) hour -= 12;
  return `${hour}:${min.toString().padStart(2, '0')}`;
}
