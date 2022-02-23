import './style.css'

/**
 * A função querySelector permite acessar
 * qualquer elemento dentro do documento
 * (página web)
 */
const mySpan = document.querySelector('span')

/**
 * A propriedade innerText é utilizada para
 * acessar ou alterar o texto interno de um
 * elemento
 */
mySpan.innerText = 'Eu sou um span' 

const myH1 = document.querySelector('h1')
myH1.style.color = 'red'
myH1.style.fontSize = '300%'

const myP = document.querySelector('p')
//myP.remove()
myP.style.display = 'none'