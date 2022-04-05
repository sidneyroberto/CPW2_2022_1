import TVShow from '../models/TVShow'

const imageNotFound = '/img/image_not_found.png'

const renderTVShowCard = (show: TVShow, container: HTMLElement) => {
  const htmlContent = `
    <div class="tv-card">
      <a class="modal-link" id="modal-${show.id}" href="tvshow.html?id=${
    show.id
  }">
        <div class="show-banner">
            <img src="${show.imageUrl || imageNotFound}" alt="${show.name}">
        </div>

        <h3>${show.name}</h3>
      </a>
    </div>
    `
  container.innerHTML += htmlContent
}

export default renderTVShowCard
