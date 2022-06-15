import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA6OQ7LYzDf6JFlmLUtskq6zxzp4Awpajs',
  authDomain: 'crownclothing-cf4b3.firebaseapp.com',
  projectId: 'crownclothing-cf4b3',
  storageBucket: 'crownclothing-cf4b3.appspot.com',
  messagingSenderId: '59400773771',
  appId: '1:59400773771:web:6626fee63a4b685cbeb48e',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
