import {firebaseAuth, googleProvider} from "../config/constants";

export function loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
    //return authenticate(loginWithFirebase(googleProvider));
}



export function logout() {
    return firebaseAuth().signOut();
}

