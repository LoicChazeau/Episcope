import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmDqaonzbcmQuyaDlPiG-b2ewcghoivZU",
  authDomain: "episcope-e2e09.firebaseapp.com",
  projectId: "episcope-e2e09",
  storageBucket: "episcope-e2e09.appspot.com",
  messagingSenderId: "1010732266673",
  appId: "1:1010732266673:web:6b2a9c7ee1e756977d1e90",
  measurementId: "G-70QCYTCBD1",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

createApp(App).use(router).mount("#app");
