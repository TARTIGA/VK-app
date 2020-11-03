// config/fire-config.js
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDzWGsrWYEPkKXwAup0UOMsNt8_fk4CFLA",
  authDomain: "vk-app-test-160ae.firebaseapp.com",
  databaseURL: "https://vk-app-test-160ae.firebaseio.com",
  projectId: "vk-app-test-160ae",
  storageBucket: "vk-app-test-160ae.appspot.com",
  messagingSenderId: "607116099728",
  appId: "1:607116099728:web:42cae1278580f9891ed815",
  measurementId: "G-Z76P1C86YW",
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack)
  }
}
const fire = firebase
export default fire
