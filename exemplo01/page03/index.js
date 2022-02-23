import './styles.css'

const clockParagraph = document.querySelector('p')
let currentDate = new Date()
clockParagraph.innerText = currentDate.toLocaleTimeString()

const colors = ['red', 'green', 'blue', 'orange']
clockParagraph.style.color = colors[0]
let index = 1

/**
 * A função setInterval executa uma determinada ação
 * de tempos em tempos. O intervalo de tempo é dado em
 * milissegundos.
 * 
 * setInterval(AÇÃO A SER REALIZADA, TEMPO EM MILISSEGUNDOS)
 */
setInterval(() => {
    currentDate = new Date()
    clockParagraph.innerText = currentDate.toLocaleTimeString()
    clockParagraph.style.color = colors[index]
    index = index < (colors.length - 1) ? index + 1 : 0
}, 1000)