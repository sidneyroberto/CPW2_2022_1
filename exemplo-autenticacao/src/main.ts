import renderWelcomePanel from './components/Welcome'
import './style.css'

const $ = document.querySelector.bind(document)
const app = <HTMLDivElement>$('#app')
const token = localStorage.getItem('token')
if (token) {
  renderWelcomePanel(app)
} else {
  window.location.href = 'login.html'
}
