const div2 = document.querySelector('#area2')
const pDiv2 = document.createElement('p')
pDiv2.innerText = 'Eu sou a div #area2'
div2.appendChild(pDiv2)

const div3 = document.getElementById('area3')
const divName = '#area3'
const pDiv3 = `
    <p>Eu sou a div ${divName}</p>
`
div3.insertAdjacentHTML('beforeend', pDiv3)

const div1 = document.querySelector('#area1')
const currentDate = new Date()
const div1Content = `
    <p>Que horas são?</p>
    <p>Agora são ${currentDate.toLocaleTimeString()}</p>
`
div1.insertAdjacentHTML('beforeend', div1Content)