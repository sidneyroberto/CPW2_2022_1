import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { firebaseApp } from '../config/firebase'

const $ = document.querySelector.bind(document)

const authStatuses = [
  'auth/wrong-password',
  'auth/user-not-found',
  'auth/invalid-email',
]

const onSubmitLoginForm = (event: Event) => {
  event.preventDefault()
  const email = (<HTMLInputElement>$('#email')).value
  const password = (<HTMLInputElement>$('#password')).value

  const auth = getAuth(firebaseApp)
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const { user } = userCredential
      const idToken = await user.getIdToken()
      localStorage.setItem('token', idToken)
      window.location.href = 'index.html'
    })
    .catch((error) => {
      const { code } = error

      if (authStatuses.includes(code)) {
        let errorParagraph = <HTMLParagraphElement>$('#error-message')
        if (!errorParagraph) {
          errorParagraph = <HTMLParagraphElement>document.createElement('p')
          errorParagraph.innerText = 'Credenciais inválidas'
          errorParagraph.id = 'error-message'

          const app = <HTMLDivElement>$('#app')
          app.insertAdjacentElement('beforeend', errorParagraph)
        }
      } else {
        console.log(code)
      }
    })
}

const renderLoginForm = (container: HTMLElement) => {
  const htmlContent = `
    <form id="login-form">
      <div class="form-input">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-input">
        <label for="email">Senha</label>
        <input type="password" id="password" name="password" required>
      </div>

      <button>Entrar</button>
    </form>
  `

  container.innerHTML = htmlContent
  const loginForm = <HTMLFormElement>$('#login-form')
  loginForm.onsubmit = onSubmitLoginForm
}

export default renderLoginForm
