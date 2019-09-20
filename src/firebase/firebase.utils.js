import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var Config = {
    // apiKey: "AIzaSyDP_GdbZeK6TMhMfVAwY84k1g583r3cuA0",
    // authDomain: "clothing-db-7aa31.firebaseapp.com",
    // databaseURL: "https://clothing-db-7aa31.firebaseio.com",
    // projectId: "clothing-db-7aa31",
    // storageBucket: "clothing-db-7aa31.appspot.com",
    // messagingSenderId: "887844497061",
    // appId: "1:887844497061:web:326a21c19212164b"
  };
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    // console.log(snapShot)
  
  
    if (!snapShot.exists) {
      const { username, password, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          username,
          password,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  }
  // Initialize Firebase
  firebase.initializeApp(Config);
  //OAuth for google sign in on firebase------------------------------------------//
    export const auth = firebase.auth()
  
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);
    //------------------------------------------------------------------------------//
  
    export const firestore = firebase.firestore()
    export default firebase