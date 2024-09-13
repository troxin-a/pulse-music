import './TrackTime.css'

export function TrackTime(propse) {
  return (
    <div class="track__time">
      <svg class="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>
      <span class="track__time-text">{propse.duration}</span>
    </div>
  )
}
