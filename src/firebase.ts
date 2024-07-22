import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAwCLM3XHXoo2knoYMhHMy93VNDoB_CSAE',
  authDomain: 'nwitter-reloaded-4e8f9.firebaseapp.com',
  projectId: 'nwitter-reloaded-4e8f9',
  storageBucket: 'nwitter-reloaded-4e8f9.appspot.com',
  messagingSenderId: '951821863916',
  appId: '1:951821863916:web:8754063dcac57646568ec9',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
