import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAb0WoTNyWqlV2fluoipNPQrJcdrXZ2SQo",
    authDomain: "menuboard-2528d.firebaseapp.com",
    projectId: "menuboard-2528d",
    storageBucket: "menuboard-2528d.appspot.com",
    messagingSenderId: "470937298328",
    appId: "1:470937298328:web:1e53386638451f0c65b7ed",
    measurementId: "G-38S7D1XJHN"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)