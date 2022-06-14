import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCbBqnL_DbL1HXcglIiP0NUDvM-bLT1okk',
  authDomain: 'exemplo-autenticacao-17984.firebaseapp.com',
  projectId: 'exemplo-autenticacao-17984',
  storageBucket: 'exemplo-autenticacao-17984.appspot.com',
  messagingSenderId: '442973256422',
  appId: '1:442973256422:web:6755d00028f1576d955927',
}

const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp
