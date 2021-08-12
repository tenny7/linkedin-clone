import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCnQsq5YJsXhzW18dBm6o6mWRINvJVCM_8",
    authDomain: "onlineshop-database.firebaseapp.com",
    projectId: "onlineshop-database",
    storageBucket: "onlineshop-database.appspot.com",
    messagingSenderId: "760392875075",
    appId: "1:760392875075:web:f854b644ada04d4dda28f6"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase