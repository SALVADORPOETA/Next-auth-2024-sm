// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkkoziuD5GVs-ioblIkDY4KkdMvNGQVJo',
  authDomain: 'next-firebase-auth-sm.firebaseapp.com',
  projectId: 'next-firebase-auth-sm',
  storageBucket: 'next-firebase-auth-sm.appspot.com',
  messagingSenderId: '831475263838',
  appId: '1:831475263838:web:e2be6815ff911f58ac87cf',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }
