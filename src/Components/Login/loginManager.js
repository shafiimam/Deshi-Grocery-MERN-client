import firebase from "firebase";
import firebaseConfig from "../../firebase.config";
import { useHistory } from 'react-router';

export  const initiateLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const googleSIgnIn= ()=> {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res =>{
        let {displayName, email,photoURL} = res.user
        const signedInUser = {
            isSignedIn : true,
            name: displayName,
            email:email,
            photo: photoURL,
            success : true
        }
        return signedInUser;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
}