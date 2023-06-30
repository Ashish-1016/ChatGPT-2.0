import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDVh9oDGU4PfoPCfEQkdcQkjZvwyPFkvuw",
    authDomain: "chatgpt-clone-bd461.firebaseapp.com",
    projectId: "chatgpt-clone-bd461",
    storageBucket: "chatgpt-clone-bd461.appspot.com",
    messagingSenderId: "883583625593",
    appId: "1:883583625593:web:f74af96be4ae435441a7a8"
  };
  
  // Initialize Firebase
  const app =getApps().length ? getApp(): initializeApp(firebaseConfig)
  const db= getFirestore()
  export {db}