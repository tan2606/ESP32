const firebaseConfig = {
  apiKey: "AIzaSyD0tMgjvnN8w58pyrqEQUp4hXoPt0QAQlM",
  authDomain: "esp32-e2781.firebaseapp.com",
  projectId: "esp32-e2781",
  storageBucket: "esp32-e2781.appspot.com",
  messagingSenderId: "423245427189",
  appId: "1:423245427189:web:e4da66ec582da30764f0bc",
  measurementId: "G-Z2C8FFSPBD"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
