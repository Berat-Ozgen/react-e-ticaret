import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';


const firebaseConfig = {
    apiKey: "AIzaSyBczRs8nEa1T3QpYf4KJQfOXodYLVXFQyk",
    authDomain: "berat-aut.firebaseapp.com",
    projectId: "berat-aut",
    storageBucket: "berat-aut.appspot.com",
    messagingSenderId: "921897956696",
    appId: "1:921897956696:web:04c1a56edfafee299e212d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const register = async(email, password) => {

    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        toast.error(error.message)
    }
}


export const login = async(email, password) => {

    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user

    } catch (error) {
        toast.error(error.message)
    }
}

export const logout = async() => {

    try {
        const { user } = await signOut(auth)
        return true

    } catch (error) {
        toast.error(error.message)
    }
}