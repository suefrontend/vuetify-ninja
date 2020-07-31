import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyBhgysCpGPbQj2-eWGl2cusxrp9XtcHZbo',
	authDomain: 'vue-resource-1fab5.firebaseapp.com',
	databaseURL: 'https://vue-resource-1fab5.firebaseio.com',
	projectId: 'vue-resource-1fab5',
	storageBucket: 'vue-resource-1fab5.appspot.com',
	messagingSenderId: '109472433109',
	appId: '1:109472433109:web:863c063223138c6ab3f35c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
