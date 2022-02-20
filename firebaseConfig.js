import firebase from "firebase/compat/app";


//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보
const firebaseConfig = {
    apiKey: "AIzaSyD2vDO8yNy1-3BMrtQ15Ac-ITisRTuTcWQ",
    authDomain: "sparta-myhoney-kwon.firebaseapp.com",
    projectId: "sparta-myhoney-kwon",
    databaseURL: "https://sparta-myhoney-kwon-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "sparta-myhoney-kwon.appspot.com",
    messagingSenderId: "692887887764",
    appId: "1:692887887764:web:c1a4b1621a940b13823981",
    measurementId: "G-L71PDWJYFP"
  };
  


//파이어베이스 연결에 오류가 있을 경우를 대비한 코드
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()