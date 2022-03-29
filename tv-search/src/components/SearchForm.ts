import axios from 'axios'
import { API_URL } from '../config'
import { getTvShow } from '../models/TVShow'
import renderTVShowCard from './TVShowCard'

const $ = document.querySelector.bind(document)

const http = axios.create({
  baseURL: API_URL,
})

const renderSearchForm = (container: HTMLElement) => {
  const htmlContent = `
    <form id="search-form">
        <input type="text" id="filter" placeholder="Digite o título da série">
        <button>Pesquisar</button>
    </form>
    `

  container.innerHTML = htmlContent
  const searchForm = <HTMLFormElement>$('#search-form')
  searchForm.onsubmit = filter
}

const filter = async (event: Event) => {
  event.preventDefault()
  const filterInput = <HTMLInputElement>$('#filter')
  const queryText = filterInput.value
  if (queryText) {
    const response = await http.get('/', {
      params: {
        q: queryText,
      },
    })

    if (response.status == 200) {
      const { data } = response
      const resultArea = <HTMLDivElement>$('#result-area')
      resultArea.innerHTML = ''
      data.forEach((jsonObj: any) => {
        const { show } = jsonObj
        const tvShow = getTvShow(show)
        renderTVShowCard(tvShow, resultArea)
      })
    }
  }
}

export default renderSearchForm
