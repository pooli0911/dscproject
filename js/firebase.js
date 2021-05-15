var firebaseConfig = {
    apiKey: "AIzaSyDU3Sf_I9GqPNXozgPArd8pmpEfjqX7iwA",
    authDomain: "dscproject-be763.firebaseapp.com",
    projectId: "dscproject-be763",
    storageBucket: "dscproject-be763.appspot.com",
    messagingSenderId: "119977139740",
    appId: "1:119977139740:web:c2da48662cd7f955da09d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const email=$("#email");
const password=$("#password")
$('#signup').click(()=>{
    firebase.auth().createUserWithEmailAndPassword(email.val(), password.val()).then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
        user.updateProfile({
            photoURL: "./img/youngwoman.png"
          }).then(function() {
            console.log("Update successful.")
          }).catch(function(error) {
            console.log(error)
          });
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode+errorMessage)
    });
})
$('#signin').click(()=>{
    firebase.auth().signInWithEmailAndPassword(email.val(), password.val()).then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode+errorMessage)
    });
})
$('#signout').click(()=>{
    firebase.auth().signOut().then(() => {
        console.log("Sign-out successful.")
        window.location.href="./index.html";
      }).catch((error) => {
        console.log(error)
      });
})
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      console.log(uid)
      console.log(user.photoURL)
      $('.nav_account').attr("src",user.photoURL)
      $('.nav_account').attr("style","border-radius:50%")
      $('#profile').html('<a href="profile.html"><img src="./img/information.png" alt="1060387" class="function_icon"></a><p>個人頁面</p>');
    } else {
    }
  });