// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZgKTX3ttcDJNg7l8eszXGh35-e4HcaaE",
    authDomain: "the-weekend-7d2f0.firebaseapp.com",
    databaseURL: "https://the-weekend-7d2f0.firebaseio.com",
    projectId: "the-weekend-7d2f0",
    storageBucket: "the-weekend-7d2f0.appspot.com",
    messagingSenderId: "1043266516630",
    appId: "1:1043266516630:web:e0c7fa18f4a55b167774b7",
    measurementId: "G-H23HSDFQ11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login
document.querySelector("#sub").addEventListener("click", function (event) {
    event.preventDefault()
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    console.log(email)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function () {
            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function () {
                    alert("Vous êtes connecté")
                    location.assign("admin.html")
                })
        })
        .catch(function (error) {
            console.log(error.code, error.message)
        })
})

