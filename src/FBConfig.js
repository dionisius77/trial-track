import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAdpK5NVJphX0BZDouxdy3dxdKSPOypj50",
    authDomain: "keamanan-digital.firebaseapp.com",
    projectId: "keamanan-digital",
    storageBucket: "keamanan-digital.appspot.com",
    messagingSenderId: "800015322522",
    appId: "1:800015322522:web:e9bf231422668e3f573e23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;