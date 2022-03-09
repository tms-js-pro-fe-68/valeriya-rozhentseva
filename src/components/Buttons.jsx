export default function Buttons({season, weather}) {
  return (
    <button
      type="button"
      onClick={() =>
        // eslint-disable-next-line no-alert
        alert(
          `Ты выбрал ${season}. CONGRATULATIONS! Погода будет ${weather}`,
        )
      }
      style={{
        width: '100px',
        background: '#FA608D',
        display: 'block',
        margin: '15px auto',
      }}>{season}</button>
  );
}