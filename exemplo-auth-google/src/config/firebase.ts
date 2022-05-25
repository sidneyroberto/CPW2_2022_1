import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDOgSQK8QsHo8wztBOWotO3Lqb8xutlD38',
  authDomain: 'exemplo-autenticacao-2d88f.firebaseapp.com',
  projectId: 'exemplo-autenticacao-2d88f',
  storageBucket: 'exemplo-autenticacao-2d88f.appspot.com',
  messagingSenderId: '805631799708',
  appId: '1:805631799708:web:c54c0f2dad90523f49d859',
}

const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp
