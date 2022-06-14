import renderHeader from './components/Header'
import './style.css'

const token = localStorage.getItem('token')

if (token) {
  const app = <HTMLDivElement>document.getElementById('app')
  renderHeader(app)
  const welcomeTitle = <HTMLHeadingElement>document.createElement('h1')
  welcomeTitle.id = 'welcome-title'
  welcomeTitle.innerText = 'Seja bem vindo!'
  app.appendChild(welcomeTitle)
} else {
  location.href = 'login.html'
}

export default {}
