// Shared Firebase connection for the public website and admin editor.
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import {
  collection,
  deleteDoc,
  doc,
  initializeFirestore,
  onSnapshot,
  setDoc,
  writeBatch
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAp7qOt0o8RiHO_LE9NfZWA5eUw39bZ_KQ",
  authDomain: "akresidential.firebaseapp.com",
  projectId: "akresidential",
  storageBucket: "akresidential.firebasestorage.app",
  messagingSenderId: "132351900527",
  appId: "1:132351900527:web:132edb9e56355cfd93869a",
  measurementId: "G-C4J3QR1P8V"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const database = initializeFirestore(firebaseApp, {
  experimentalAutoDetectLongPolling: true
});
export const storage = getStorage(firebaseApp);

export {
  collection,
  deleteDoc,
  deleteObject,
  doc,
  getDownloadURL,
  onAuthStateChanged,
  onSnapshot,
  ref,
  setDoc,
  signInWithEmailAndPassword,
  signOut,
  uploadBytes,
  writeBatch
};
