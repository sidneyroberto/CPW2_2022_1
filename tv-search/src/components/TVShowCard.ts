import TVShow from '../models/TVShow'

const imageNotFound = '/img/image_not_found.png'

const renderTVShowCard = (show: TVShow, container: HTMLElement) => {
  const htmlContent = `
        <div class="tv-card">
            <div class="show-banner">
                <img src="${show.imageUrl || imageNotFound}" alt="${show.name}">
            </div>

            <h3>${show.name}</h3>
        </div>
    `

  container.innerHTML += htmlContent
}

export default renderTVShowCard
