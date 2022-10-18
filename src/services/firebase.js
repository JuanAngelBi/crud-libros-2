import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDASDE519zN8_jgScrs1kg-xK5uxWSghDs",
  authDomain: "crud-libros-f5779.firebaseapp.com",
  projectId: "crud-libros-f5779",
  storageBucket: "crud-libros-f5779.appspot.com",
  messagingSenderId: "688347366370",
  appId: "1:688347366370:web:37b5d6698f3a0b978befbb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);