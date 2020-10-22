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


$('#addStudentForm').on('submit', onAddStudent);



function onAddStudent (event) {
    event.preventDefault();

    const nom = $('#nom').val();
    const prénom = $('#prénom').val();
    const heure1 = $('#heure1').val();
    const heure2 = $('#heure2').val();
    const date = $('#date').val();
    const tel = $('#tel').val();


    // Ajouter les information dans la database 
    firebase.database().ref('dates/').push({
        nom,
        prénom,
        date,
        heure1,
        heure2,
        tel
        
    });
}


//  récupérèr les information précedement rentrée dans la base de donnée

firebase.database().ref('dates/').on('value', function(snapshot) {

    let content = '';
    snapshot.forEach(function(item) {
        const student = item.val()
        content += `<div> </br><b> ${student.nom} , ${student.prénom} ,Le ${student.date} , De ${student.heure1} - ${student.heure2} </br>Plus d'infos au : ${student.tel} </b> <button>TICKET</button> </div>`;
    });
    
    $('#data').html(content);
});



$("#suppression").click(supp);

function supp(){
    const td = $(this).attr("class").split(" ")[0]

    if( $("#suppression").val() == "supp"){
        db.collection("#").doc(td).delete().then(function() {
            console.log("Document successfully deleted!");
            alert("planning supprimé avec succés")
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    } else {
        db.collection("admin").doc(td).delete().then(function() {
            console.log("Document successfully deleted!");
            alert(" supprimé avec succés")
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
};