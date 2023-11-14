
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD7T6j_CdiACSzK3PC1kaq0_mA2YLOl53s",
  authDomain: "proyectofinalreact-90946.firebaseapp.com",
  projectId: "proyectofinalreact-90946",
  storageBucket: "proyectofinalreact-90946.appspot.com",
  messagingSenderId: "359563312349",
  appId: "1:359563312349:web:276af59dcd4ba47a236f34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore (app)
