import renderLoginForm from './components/LoginForm'
import './styles.css'

const app = <HTMLDivElement>document.querySelector('#app')
renderLoginForm(app)

const createUserLink =
    <HTMLAnchorElement>document.createElement('a')
createUserLink.id = 'create-user-link'
createUserLink.innerText = 'Clique aqui para criar uma nova conta'
createUserLink.href = 'createuser.html'
app.insertAdjacentElement('beforeend', createUserLink)
