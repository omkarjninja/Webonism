// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection,addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0XVTJ3MiVHrU4hp-Mn_KgrcxeHG2zoiw",
    authDomain: "webonism-41d26.firebaseapp.com",
    projectId: "webonism-41d26",
    storageBucket: "webonism-41d26.appspot.com",
    messagingSenderId: "93776048303",
    appId: "1:93776048303:web:ec3ec9b38cbfe498b6e45a",
    measurementId: "G-L7KT0L4T80"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db , collection, addDoc };
