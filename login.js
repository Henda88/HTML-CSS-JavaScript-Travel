
function connexion() {
    var tab1 =JSON.parse(localStorage.getItem("idtab"));
     
    var x2= document.getElementById("name").value;
    var y2= document.getElementById("pswd").value;
    
    for (i=0;i<tab1.length;i++){
        if (tab1[0].name==x2 && tab1[0].password==y2){
           
        
        var d = document.getElementById("lien").innerHTML = window.location.href="ADMIN.html";
    

        }
        else if (tab1[i].name==x2 && tab1[i].password==y2){

            var d = verification();
           break;
        }
        else {
           var d = document.getElementById("message").innerHTML=" please check your username or password";
        }
        
    }
}
function verification() {
    var x = document.getElementById("name").value;
    var y = document.getElementById("pswd").value;
    var tab =[{name:"",password:""}];
    tab.push({name:x,password:y});
    localStorage.setItem("idtab2",JSON.stringify(tab));
    var d = document.getElementById("lien").innerHTML = window.location.href="home.html";
}
