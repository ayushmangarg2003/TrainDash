import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs } from '@firebase/firestore';

let db = false;

export const getDb = () => {
    if (!db) {
        const firebaseConfig = {
            apiKey: "AIzaSyAeqqnFzn3jhmuPmoA0Hqi9CG76hF5t0aI",
            authDomain: "train-dash.firebaseapp.com",
            projectId: "train-dash",
            storageBucket: "train-dash.appspot.com",
            messagingSenderId: "20886071144",
            appId: "1:20886071144:web:d49ba7a5a0943896b458dd",
            measurementId: "G-THSY05EDVK"
        };

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}

const res = []

export const findAll = async () => {
    const trainData = await getDocs(collection(getDb(), "trainData"));
    trainData.forEach((doc) => {
        res.push({
            id: doc.id,
            ...doc.data()
        })
    });
}

findAll()

export default res;

