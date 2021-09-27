import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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
export const auth = firebase.auth();
export const firstore = firebase.firestore();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
export default firebase