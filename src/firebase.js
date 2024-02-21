import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHheWoj3EnYmk-OxcmCj1VLFb6VfsWlPM",
  authDomain: "summary-master-6dea2.firebaseapp.com",
  projectId: "summary-master-6dea2",
  storageBucket: "summary-master-6dea2.appspot.com",
  messagingSenderId: "468540641952",
  appId: "1:468540641952:web:c3a794e706f07b88e5efc5",
  measurementId: "G-CVM2Q7LT8P"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth1 = getAuth(firebaseApp);

export { auth1 };
