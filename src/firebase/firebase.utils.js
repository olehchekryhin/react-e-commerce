import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCT_s72K6iyqP-TgofT_z2B591DEyFZ6Qw",
    authDomain: "crwn-db-b3104.firebaseapp.com",
    projectId: "crwn-db-b3104",
    storageBucket: "crwn-db-b3104.appspot.com",
    messagingSenderId: "929041781930",
    appId: "1:929041781930:web:326f298e04b2bcd041ecd3",
    measurementId: "G-79YQK40KF6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
