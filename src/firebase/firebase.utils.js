import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var Config = {
  apiKey: "AIzaSyAmXBBz_vOVhxAjwCPEOyhpGBpeuShp0OQ",
  authDomain: "dragonslayeralpha-eb631.firebaseapp.com",
  databaseURL: "https://dragonslayeralpha-eb631.firebaseio.com",
  projectId: "dragonslayeralpha-eb631",
  storageBucket: "dragonslayeralpha-eb631.appspot.com",
  messagingSenderId: "803927438765",
  appId: "1:803927438765:web:8c259ecacf349d0e2ddd24",
  measurementId: "G-HVFCBJCV7D"
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