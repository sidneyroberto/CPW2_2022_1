import renderWelcomePanel from './components/Welcome'
import './styles.css'

const $ = document.querySelector.bind(document)
const app = <HTMLDivElement>$('#app')
const token = localStorage.getItem('token')
if (token) {
  renderWelcomePanel(app)
} else {
  window.location.href = 'login.html'
}
