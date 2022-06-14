import { getAuth } from 'firebase/auth'
import firebaseApp from './config/firebase'

const loadingGif = <HTMLImageElement>document.createElement('img')
loadingGif.src = '/assets/img/loading.gif'
const app = <HTMLDivElement>document.getElementById('app')
app.appendChild(loadingGif)
app.style.display = 'flex'
app.style.alignItems = 'center'
app.style.justifyContent = 'center'

const auth = getAuth(firebaseApp)
auth
  .signOut()
  .then(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userPhoto')
    location.href = 'login.html'
  })
  .catch((error) => console.log(error))
