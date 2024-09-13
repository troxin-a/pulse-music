import './TrackTitle.css'

export function TrackTitle(propse) {
  return (
    <div class="track__title-text">
      <a class="track__title-link" href={propse.link}>
        {propse.text.main}
        <span class="track__title-span">{propse.text.span}</span>
      </a>
    </div>
  )
}
