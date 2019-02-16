import firebase from 'firebase';

const config = {
apiKey: "AIzaSyCDclPlzlqzSwzvCrVmcdtaG4kR6tK-4po",
authDomain: "shumai-hackuci.firebaseapp.com",
databaseURL: "https://shumai-hackuci.firebaseio.com",
projectId: "shumai-hackuci",
storageBucket: "shumai-hackuci.appspot.com",
messagingSenderId: "850606485011"
};
firebase.initializeApp(config);
export default firebase;