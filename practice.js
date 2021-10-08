// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCqF2ADCRiTl2EpNSYXDEi_OQvmUi4qyyU",
  authDomain: "kwitter-e52fd.firebaseapp.com",
  databaseURL: "https://kwitter-e52fd-default-rtdb.firebaseio.com",
  projectId: "kwitter-e52fd",
  storageBucket: "kwitter-e52fd.appspot.com",
  messagingSenderId: "50173877685",
  appId: "1:50173877685:web:4159c80e47aa4c59290dfc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "hi papa"
    });
}