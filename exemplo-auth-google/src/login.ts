import renderLoginButton from './components/LoginButton'
import './styles.css'

const app = <HTMLDivElement>document.getElementById('app')
renderLoginButton(app)

const p = <HTMLParagraphElement>document.createElement('p')
p.id = 'time-paragraph'
app.appendChild(p)

setInterval(() => {
  const time = new Date().toLocaleTimeString()
  p.innerText = time
}, 1000)
