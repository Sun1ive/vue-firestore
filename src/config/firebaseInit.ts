import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
