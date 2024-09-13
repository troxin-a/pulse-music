import './TrackAuthor.css'

export function TrackAuthor(propse) {
  return (
    <div class="track__author">
      <a class="track__author-link" href={propse.link}>
        {propse.text}
      </a>
    </div>
  )
}
