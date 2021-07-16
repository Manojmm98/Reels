import firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';
import 'firebase/storage';


firebase.initializeApp(
    {
        apiKey: "AIzaSyCGhUlcyDc6f_8gG4RiT-X1XodHSHzm-VY",
        authDomain: "reels-d992d.firebaseapp.com",
        projectId: "reels-d992d",
        storageBucket: "reels-d992d.appspot.com",
        messagingSenderId: "889401597770",
        appId: "1:889401597770:web:f65aaf56bbbd5f59fbabb3"
      }
)
// here we are exporting auth 
 export const auth = firebase.auth();
 // but here we are not exporting whole firebase for security reason we are exporting oly users and timestamp also storage
 const firestore  =firebase.firestore();

 export const database={
   users: firestore.collection('users'),
   getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  }

 export const storage = firebase.storage();
