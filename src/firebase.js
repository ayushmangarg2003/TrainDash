import { initializeApp } from 'firebase/app';
import { getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeqqnFzn3jhmuPmoA0Hqi9CG76hF5t0aI",
    authDomain: "train-dash.firebaseapp.com",
    projectId: "train-dash",
    storageBucket: "train-dash.appspot.com",
    messagingSenderId: "20886071144",
    appId: "1:20886071144:web:d49ba7a5a0943896b458dd",
    measurementId: "G-THSY05EDVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;

