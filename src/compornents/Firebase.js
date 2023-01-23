import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAyOItwJ9LPxHn5frmaR-_WKfUEmy4UWoI",
    authDomain: "ikamatch-cecc5.firebaseapp.com",
    projectId: "ikamatch-cecc5",
    storageBucket: "ikamatch-cecc5.appspot.com",
    messagingSenderId: "1029626394189",
    appId: "1:1029626394189:web:ab31b463c6a7b9bd668e04"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default db;
export { auth, provider}
