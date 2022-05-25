import renderWelcomePanel from './components/Welcome'
import './styles.css'

const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if (token) {
  renderWelcomePanel(app)
} else {
  location.href = 'login.html'
}
