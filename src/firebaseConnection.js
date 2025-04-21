
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD1i0JQxNJQVpTakYatjWvINVeYIu5l4CA",
  authDomain: "projeto-5-8036f.firebaseapp.com",
  projectId: "projeto-5-8036f",
  storageBucket: "projeto-5-8036f.firebasestorage.app",
  messagingSenderId: "49231778896",
  appId: "1:49231778896:web:e1dfbee1b54f588d576d55"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};