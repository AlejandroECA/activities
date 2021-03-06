
import firebase, {
    firestore, 
    auth
} from './firebase.utils'



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if (!snapShot.exist) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("error creatin user", error.message);
      }
    }
  
    return userRef;

    
};
  
  
  
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
