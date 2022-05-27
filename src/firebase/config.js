
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCa6HIXK9IFAMrCXFhJo3TMVIY558GW7vg",
  authDomain: "ecomerce22-345f4.firebaseapp.com",
  projectId: "ecomerce22-345f4",
  storageBucket: "ecomerce22-345f4.appspot.com",
  messagingSenderId: "846310550252",
  appId: "1:846310550252:web:80590c95ee79e66c85d3c9"
};


const app = initializeApp(firebaseConfig);

export default function  getFirestoreApp(){
    return app
}