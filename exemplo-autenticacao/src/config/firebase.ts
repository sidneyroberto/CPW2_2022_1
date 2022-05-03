import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_DOMINIO',
  projectId: 'SEU_ID',
  storageBucket: 'SEU_ENDERECO_DE_BUCKET',
  messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
  appId: 'SUA_API_KEY',
}

export const firebaseApp = initializeApp(firebaseConfig)
