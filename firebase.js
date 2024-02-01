import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyApwVEiTaGfTCtoumqCXpvqU56numflPvM",
    authDomain: "note-app-df99b.firebaseapp.com",
    projectId: "note-app-df99b",
    storageBucket: "note-app-df99b.appspot.com",
    messagingSenderId: "979777551833",
    appId: "1:979777551833:web:d7d0356e6f0700ad20adc8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")