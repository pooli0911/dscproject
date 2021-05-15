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