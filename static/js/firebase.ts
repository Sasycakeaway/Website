import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAE_uqiqEDqQkaaIzZ-6L2pTQ_6uU6-anM",
  authDomain: "sasy-s-cake-away-bc051.firebaseapp.com",
  projectId: "sasy-s-cake-away-bc051",
  storageBucket: "sasy-s-cake-away-bc051.appspot.com",
  messagingSenderId: "650417814398",
  appId: "1:650417814398:web:78791de6ca784c5b24d12f",
  measurementId: "G-VNSBH37Q9R",
};
export function fbinit(){
    const app = initializeApp(firebaseConfig);
    return app;
}