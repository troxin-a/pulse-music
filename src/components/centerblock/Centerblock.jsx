import './Centerblock.css'
import { Filter } from './Filter'
import { Search } from './Search'
import { Track } from './track/Track'
import { tracks } from '../../tracks'


export function Centerblock() {  
  return (
    <div class="main__centerblock centerblock">
      <Search />
      <h2 class="centerblock__h2">Треки</h2>
      <Filter />
      <div class="centerblock__content">
        <div class="content__title playlist-title">
          <div class="playlist-title__col col01">Трек</div>
          <div class="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div class="playlist-title__col col03">АЛЬБОМ</div>
          <div class="playlist-title__col col04">
            <svg class="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div class="content__playlist playlist">
          {tracks.map((track) => <Track {...track} />)}
        </div>
      </div>
    </div>
  )
}
