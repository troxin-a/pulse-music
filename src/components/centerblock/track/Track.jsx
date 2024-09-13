import './Track.css'
import { TrackTitle } from './TrackTitle'
import { TrackAuthor } from './TrackAuthor'
import { TrackAlbum } from './TrackAlbum'
import { TrackTime } from './TrackTime'

export function Track(propse) {
  return (
    <div class="playlist__item">
      <div class="playlist__track track">
        <div class="track__title">
          <div class="track__title-image">
            <svg class="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <TrackTitle {...propse.title} />
        </div>
        <TrackAuthor {...propse.author} />
        <TrackAlbum {...propse.album} />
        <TrackTime duration={propse.duration} />
      </div>
    </div>
  )
}
