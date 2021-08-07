var firebaseConfig = {
    apiKey: "AIzaSyBWNW9FA4eXqdSApfEDpU8jg1Vjc7v40RM",
    authDomain: "kwitter-2e2df.firebaseapp.com",
    databaseURL: "https://kwitter-2e2df-default-rtdb.firebaseio.com",
    projectId: "kwitter-2e2df",
    storageBucket: "kwitter-2e2df.appspot.com",
    messagingSenderId: "1045658992807",
    appId: "1:1045658992807:web:7969d0ebd5b7e2e5aa5b82"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send() {
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById(msg).value= "";
}