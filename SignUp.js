function main(){
    if (!myfunction1()&& !myfunction2()&& !myfunction3()&& myfunction5()&& myfunction6()){
       
        }
        

    

}

 



function myfunction1() {
    var x1 = document.getElementById("myid1").value;
    var cspecial=" :@<>";
    if (carSpecial (x1,cspecial))
    var x1 = document.getElementById("message1").innerHTML="don't use special caracter in your username";
 }
 function myfunction2() {
     var x2 = document.getElementById("myid2").value;
     a="@"
     if (!arobase(x2))
     var x2 = document.getElementById("message2").innerHTML= "enter a valid email adress";
 
 }
 function myfunction3() {
     var x3 = document.getElementById("myid3").value;
     var dateofbirth = new Date(x3);
     var today = new Date();
     var age = today.getTime() - dateofbirth.getTime();
     age= Math.floor(age/(1000 * 60 *60 * 24 * 365));
     if (age<18)
     x3= document.getElementById("message3").innerHTML=" your age is under 18";
 
 
 }
 function myfunction4() {
     var x4 = document.getElementById("myid4").value;
     var cspecial = " :!@<>";
     if (haslowercase(x4) && hasUppercase(x4) && x4.length > 8 && carSpecial(x4,cspecial) && hasNumber(x4) )
         var x4 = document.getElementById("message4").innerHTML = "your password is strong";
     else
         if ( haslowercase(x4) && hasUppercase(x4) || haslowercase(x4) && x4.length > 8 || hasUppercase(x4) && x4.length > 8)
     var x4 = document.getElementById("message4").innerHTML = "your password is medium";
     else {
         var x4 = document.getElementById("message4").innerHTML = "your password is low";
     }
    }
 function myfunction5(){
    var x4 =document.getElementById("myid4").value;
    var cspecial = " :!@<>";
    if (haslowercase(x4) && hasUppercase(x4) && x4.length > 8 && carSpecial(x4,cspecial) && hasNumber(x4) 
    ||( haslowercase(x4) && hasUppercase(x4) || haslowercase(x4) && x4.length > 8 
    || hasUppercase(x4) && x4.length > 8)) {
        return true;
    }
    return false;
 }
 
 
 function hasUppercase(chaine) {
     for (i = 0; i < chaine.length; i++)
     {
         if (chaine[i] === chaine[i].toUpperCase()) {
             return true;
         }
     }
         return false;
 
 }
 function haslowercase(chaine) {
     for (i = 0; i < chaine.length; i++)
     {
         if (chaine[i] === chaine[i].toLowerCase()) {
             return true;
         }
     }
         return false;
 
 }
 function hasNumber(chaine) {
     for ( i = 0; i < chaine.length; i++)
     {
         if (isNumeric(chaine[i])) {
             return true;
         }
     }
         return false;
 
 }
 function isNumeric(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
   }
   function arobase(chaine){
       a="@";
     for ( var i=0; i < chaine.length; i++)
 
     {
       if(chaine.indexOf(a)!==-1)
       {
           return true;
       }
    }
    return false;
   }
 function carSpecial(chaine,cspecial) {
     for ( var i=0; i < cspecial.length; i++)
 
       {
         if(chaine.indexOf(cspecial[i])!==-1)
         {
             return true;
         }
      }
      return false;
 }
 
var dd = [{ name: "Admin" , password:"Admin",email:"haythembenjbara@gmail.com",date:"10/20/1990"}];
 
 
 function myfunction6() {
     var x = document.getElementById("myid1").value;
     var d = document.getElementById("myid4").value;
     var w = document.getElementById("myid2").value;
     var z = document.getElementById("myid3").value;
     
     dd.push({name:x,password:d,email:w,date:z});
     
     localStorage.setItem("idtab",JSON.stringify(dd));
     var f = document.getElementById("lien").innerHTML = window.location.href="login.html";
 }
    