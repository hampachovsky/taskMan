import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCq1yKuiRdAo4gAUv1myuWp-UlKUEN4GGw',
  authDomain: 'task-manager-dd30e.firebaseapp.com',
  databaseURL: 'https://task-manager-dd30e.firebaseio.com',
  projectId: 'task-manager-dd30e',
  storageBucket: 'task-manager-dd30e.appspot.com',
  messagingSenderId: '567771819860',
  appId: '1:567771819860:web:708fee04dd2275c490e2c1',
});

const db = firebase.firestore(firebaseConfig);

export { firebaseConfig as firebase, db };
