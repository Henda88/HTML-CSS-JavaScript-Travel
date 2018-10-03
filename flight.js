var flights = JSON.parse(localStorage.getItem("tabF"));
var html = `<table>
<tr>
<th>Destination</th>
<th>Departure</th>
<th>Return</th>
<th>Airlines</th>
<th>Price</th>
<th>Way</th>
<th>Select</th>
</tr>  ` ;
 for(let flight of flights ){
    html = html  + `<tr>
 <td> ${flight.destination}</td>
 <td>${flight.departure}</td>
 <td>${flight.return}</td>
 <td>${flight.airlines}</td>
 <td>${flight.price}</td>
 <td>${flight.way}</td>
 <td><button type button onclick=addToPanel("${flight.id}")>add To panel</button</td>
 <tr>`
 

}
html +='</table>';
var abcf = document.getElementById("tableaux").innerHTML = html;

function addToPanel(id){
    var flightt = findflinght(id);
    tabPanel.push(flightt);
    console.log(tabPanel);
    localStorage.setItem("panelFlight",JSON.stringify(tabPanel));
    
}
function findflinght(id){
    for (let flight of flights) {
        if(flight.id === id){
        return flight;
    }
}
}
var tabPanel = [];
function verification() {
    var d = JSON.parse(localStorage.getItem("idtab2"));
    console.log(d);
    if (d == null) {
        
    var s = document.getElementById("lien").innerHTML = window.location.href = "login.html";

        
    }
}

