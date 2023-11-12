const firebaseConfig = {
  apiKey: "AIzaSyDDnWhG2Z9BotUIytaJQT17FJD_PVbmMWM",
  authDomain: "pobeguada-login.firebaseapp.com",
  databaseURL: "https://pobeguada-login-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pobeguada-login",
  storageBucket: "pobeguada-login.appspot.com",
  messagingSenderId: "92932274899",
  appId: "1:92932274899:web:9c7ce005f6ac789a5c7226"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()

  // set up register function
  function register() {
    // get all our input fields
    name = document.getElementById('name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    number = document.getElementById('number').value
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function(){
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()
    // Create User data
    var user_data = {
      name : name,
      email : email,
      number : number,
      last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user_data)

  })

/*function validate_password(password){
  // accepts greater than 6 characters
  if(password < 6){
    return false
  } else{
    return true
  }
} */