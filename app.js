
	     // Initialize Firebase
      var config = {
    apiKey: "AIzaSyD1QqcArE_PjJv23GctnkcHEburoRtngOU",
    authDomain: "login-profile.firebaseapp.com",
    databaseURL: "https://login-profile.firebaseio.com",
    projectId: "login-profile",
    storageBucket: "login-profile.appspot.com",
    messagingSenderId: "1076494945366"
  };
  firebase.initializeApp(config);

var auth = firebase.auth();

var Reset = document.querySelector("#signout");
var currentEmail = document.querySelector("#current-email");
// Signout function
function clickReset(){
  auth.signout()
  console.log('signout')
}

var signinEmail = document.querySelector("#email");
var signinPassword = document.querySelector("#password");
var signinButton = document.querySelector("#signin");
signinButton.addEventListener("click", clickSigninButton);
function clickSigninButton() {
  auth.signInWithEmailAndPassword(signinEmail.value, signinPassword.value).
  then(function(user){
    console.log(user)
  }, function(error) {
    console.log('wrong password')
    
  });
}