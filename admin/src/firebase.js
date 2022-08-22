// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const key = process.env.REACT_APP_apiKey
const auth = process.env.REACT_APP_authDomain
const project = process.env.REACT_APP_projectId
const storage = process.env.REACT_APP_storageBucket
const sender = process.env.REACT_APP_messagingSenderId
const appIdentification = process.env.REACT_APP_appId

const firebaseConfig = {
  apiKey: key,
  authDomain: auth,
  projectId: project,
  storageBucket: storage,
  messagingSenderId: sender,
  appId: appIdentification,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;