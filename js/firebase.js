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
var db = firebase.firestore();
const email=$("#email");
const password=$("#password")
var docRef=null
$('#signup').click(()=>{
    docRef=db.collection("profiles").doc(email.val())
    docRef.get().then((doc) => {
        if (!doc.exists) {
            docRef.set({id:email.val(), healthid:password.val(), photoURL: "./img/youngwoman.png"}).then(() => {
                console.log("Update successful.")
                window.location.href="./confirm.html";
            }).catch(function(error) {
                console.log(error);
            });
        } else {
            if(!doc.data().password.exists){
                docRef.set({id:email.val(), healthid:password.val(), photoURL: "./img/youngwoman.png"}).then(() => {
                    console.log("Update successful.")
                    window.location.href="./confirm.html";
                }).catch(function(error) {
                    console.log(error);
                });
            }else{
            console.log("already exists");
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    })
})
$('#signin').click(()=>{
    docRef=db.collection("profiles").doc(email.val())
    docRef.get().then((doc) => {
        if (doc.exists) {
            if(doc.data().password==password.val()){
                firebase.auth().signInWithEmailAndPassword(email.val(), password.val()).then((userCredential) => {
                    var user = userCredential.user;
                    console.log(user)
                    window.location.href="./index.html";
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }else{
                console.log("password wrong");
            }
        } else {
            console.log("does not exists");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    })
})
$('#signout').click(()=>{
    firebase.auth().signOut().then(() => {
        console.log("Sign-out successful.")
        window.location.href="./index.html";
      }).catch((error) => {
        console.log(error)
      });
})
$('#enter').click(()=> { 
    window.location.href="./id.html";
});
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