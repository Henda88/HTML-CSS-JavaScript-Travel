function connexion() {
    var x2= document.getElementById("name").value;
    var y2= document.getElementById("pswd").value;
    var tab1=JSON.parse(localStorage.getItem("idtab"));
    for (i=0;i<tab1.length;i++){
        if (tab1[0].name==x2=="admin" && tab1[0].password==y2=="admin"){
            var d = document.getElementById("lien").innerHTML = window.location.href="admin.html";
        }
        else if (tab1[i].name==x2 && tab1[i].password==y2){

            var d = document.getElementById("lien").innerHTML = window.location.href="home.html";
           break;
        }
        else {
           var d = document.getElementById("message7").innerHTML=" please check your username or password";
        }
        
    }
}