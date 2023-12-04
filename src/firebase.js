import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0wYmHPnyJKHwbUQLyGANfSQATNZA-WkY",
  authDomain: "amazron-react-clone.firebaseapp.com",
  projectId: "amazron-react-clone",
  storageBucket: "amazron-react-clone.appspot.com",
  messagingSenderId: "1098049923092",
  appId: "1:1098049923092:web:65207614fd65422e1c9f01",
  measurementId: "G-D3TLFZPEBT",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
