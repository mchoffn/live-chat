import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCiBtEvY9B-lutGbIrrjIx35-alcK4KnaY",
    authDomain: "incloud-live-chat.firebaseapp.com",
    projectId: "incloud-live-chat",
    storageBucket: "incloud-live-chat.appspot.com",
    messagingSenderId: "393348700501",
    appId: "1:393348700501:web:3a62eee386a5ee2f04b7dc",
    measurementId: "G-K27J16S83L"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }