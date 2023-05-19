import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// since these are the js sdk credentials
// they are safe to store in github
// https://jsmobiledev.com/article/hide-firebase-api/
const firebaseConfig = {
  apiKey: "AIzaSyCsxIqucIhEVkN0LjH05Zwm7h4-jqJBMA0",
  authDomain: "cerberus-36209.firebaseapp.com",
  projectId: "cerberus-36209",
  storageBucket: "cerberus-36209.appspot.com",
  messagingSenderId: "559095443642",
  appId: "1:559095443642:web:eee3d9f69e5c2b26059283",
  measurementId: "G-VGFKGCKN8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export = analytics