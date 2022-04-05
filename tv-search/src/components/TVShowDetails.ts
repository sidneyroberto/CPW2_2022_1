import TVShow from '../models/TVShow'

const $ = document.querySelector.bind(document)
const imageNotFound = '/img/image_not_found.png'

const renderTVShowDetails = (show: TVShow, container: HTMLElement) => {
  const htmlContent = `
    <div id="show-container">
      <div id="image-container">
        <img src="${show.imageUrl || imageNotFound}" alt="${show.name}">
      </div>

      <div id="details-container">
        <p><span class="detail-title">Título:</span> ${show.name}</p>
        <p><span class="detail-title">Tipo:</span> ${show.type}</p>
        <p><span class="detail-title">Canal:</span> ${show.channel}</p>
        <p><span class="detail-title">Gêneros:</span> ${show.genres.join(
          ', '
        )}</p>
        <p><span class="detail-title">Em execução:</span> ${
          show.isRunning ? 'Sim' : 'Não'
        }</p>
        <p><span class="detail-title">Idioma:</span> ${show.language}</p>
        <p><span class="detail-title">Data de estréia:</span> ${
          show.premieredDate
            ? show.premieredDate.toLocaleDateString()
            : 'Não informado'
        }</p>

         <button id="backbtn" onclick="history.back()">Voltar</butt>
      </div>
    </div>
  `

  container.innerHTML = htmlContent
}

export default renderTVShowDetails
