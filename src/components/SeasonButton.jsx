export default function Buttons({ season, weather }) {
  return (
    <button
      className="button_seasons"
      type="button"
      onClick={() =>
        // eslint-disable-next-line no-alert
        alert(`Ты выбрал ${season}. CONGRATULATIONS! Погода будет ${weather}`)
      }
    >
      {season}
    </button>
  );
}
