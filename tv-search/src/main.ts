import renderSearchForm from './components/SearchForm'
import './style.css'

const $ = document.querySelector.bind(document)

const container = <HTMLDivElement>$('#container')
renderSearchForm(container)
const resultArea = document.createElement('div')
resultArea.id = 'result-area'
container.insertAdjacentElement('beforeend', resultArea)
