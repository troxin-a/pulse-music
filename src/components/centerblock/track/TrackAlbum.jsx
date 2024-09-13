import './TrackAlbum.css'

export function TrackAlbum(propse) {
  return (
    <div class="track__album">
      <a class="track__album-link" href={propse.link}>
        {propse.text}
      </a>
    </div>
  )
}
