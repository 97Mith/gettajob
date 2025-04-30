import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1i0JQxNJQVpTakYatjWvINVeYIu5l4CA",
  authDomain: "projeto-5-8036f.firebaseapp.com",
  projectId: "projeto-5-8036f",
  storageBucket: "projeto-5-8036f.appspot.com",
  messagingSenderId: "49231778896",
  appId: "1:49231778896:web:e1dfbee1b54f588d576d55"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
