var tabcars = JSON.parse(localStorage.getItem("tabC"));
var htmlCars  = `<table>
<tr>
<th>car</th>
<th>PickUp</th>
<th>DropOff</th>
<th>duration</th>
<th>Price</th>
<th>Select</th>
</tr>  ` ;
for(let tabcarss of tabcars) {
    htmlCars = htmlCars + `<tr>
    <td>${tabcarss.car}</td>
    <td>${tabcarss.pickup}</td>
    <td>${tabcarss.dropoff}</td>
    <td>${tabcarss.duration}</td>
    <td>${tabcarss.price}</td>
    <td><button type = button onclick=addToPanel("${tabcarss.id}")>Add to panel</button></td>
    </tr>
    `
}
htmlCars += '</table>';
var abcC = document.getElementById("tabC").innerHTML = htmlCars;
function addToPanel(id){
    var carS = findIdcar(id);
    PanelCar.push(carS);
    localStorage.setItem("panelcar",JSON.stringify(PanelCar));


}
function findIdcar(id){
    for(let tabcarss of tabcars) {
        if(tabcarss.id === id){
            return tabcarss;
        }
    }
}
var PanelCar = [];
function verification() {
    var d = JSON.parse(localStorage.getItem("idtab2"));
    console.log(d);
    if (d == null) {
        
    var s = document.getElementById("lien").innerHTML = window.location.href = "login.html";

        
    }
}