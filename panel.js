var panelFlight = JSON.parse(localStorage.getItem("panelFlight"));
var htmlFlight = ` <table id=tab1>
<tr>
    <th  colspan="3">Flight</th>
</tr>
<tr>
<td>Destination</td>

<td>Price</td>
<td>Select</td>
</tr>
`;

for(let panelFlightt of panelFlight) {
    htmlFlight = htmlFlight + `<tr>
    <td> ${panelFlightt.destination}</td>
    <td> ${panelFlightt.price}</td>
    <td><button type= button onclick =deleteflight("${panelFlightt.id}"),deleteThisRow(this)>Remove</button</td>
    </tr>
    `
    
}
htmlFlight +='</table';
var panelCar = JSON.parse(localStorage.getItem("panelcar"));
var htmlcar = `<table id=tab2>
<tr>
    <th colspan="3">Car</th>
</tr>
<tr>
<td>car</td>
<td>Price</td>
<td>Select</td>
<tr>
`;
for( let panelcarr of panelCar) {
    htmlcar = htmlcar + `<tr>
    <td>${panelcarr.car}</td>
    <td>${panelcarr.price}</td>
    <td><button type=button onclick =deletecar("${panelcarr.id}"),deleteThisRow(this)>Remove</button></td>
    </tr>`
    
}
htmlcar += '</table>';
var panelhotel = JSON.parse(localStorage.getItem("panelhotel"));
var htmlhotel = `<table id=tab3>
<tr>
<th colspan ="3">Hotel</th>
</tr>
<tr>
<td>Hotel</td>
<td>Price</td>
<td>Select</td>
</tr>
`;
for(let hotels of panelhotel) {
    htmlhotel = htmlhotel + `<tr>
    <td>${hotels.hotel}</td>
    <td>${hotels.price}$</td>
    <td><button type = button onclick =deletehotel("${hotels.id}"),deleteThisRow(this)>Remove</button></td>
    </tr>`
    
    
}

htmlhotel += '</table>';
var abc21 = document.getElementById("haythem1").innerHTML = htmlFlight ;
var abc22 = document.getElementById("haythem2").innerHTML = htmlcar;
var abc23 = document.getElementById("haythem3").innerHTML = htmlhotel;
var button = `<button id=button24 type = button onclick=>Confirmer</button>`;
var abc24 = document.getElementById("haythem4").innerHTML = button;


    
     
    

function findByID(id){
    for(let hotels of panelhotel){
        if(hotels.id === id){
            return hotels;
        }
    }
}
function deletehotel(id) {

    // var flightt = findflight(id);

     for (i = 0; i < panelhotel.length; i++) {
         if (panelhotel[i].id === id) {

            panelhotel.splice(i, 1);
         }
         break;
     }
     localStorage.setItem("panelhotel", JSON.stringify(panelhotel));

     localStorage.getItem("panelhotel", JSON.stringify(panelhotel));
     
 }
 function deleteThisRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab3").deleteRow(i);


    var hotel = JSON.parse(localStorage.getItem("panelhotel"));

}


function findByID(id){
    for(let panelFlightt of panelFlight){
        if(panelFlightt.id === id){
            return panelFlightt;
        }
    }
}
function deleteflight(id) {

    // var flightt = findflight(id);

     for (i = 0; i < panelFlight.length; i++) {
         if (panelFlight[i].id === id) {

            panelcar.splice(i, 1);
         }
         break;
     }
     localStorage.setItem("panelFlight", JSON.stringify(panelFlight));

     localStorage.getItem("panelFlight", JSON.stringify(panelFlight));
     
 }
 function deleteThisRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab1").deleteRow(i);
   var Flight = JSON.parse(localStorage.getItem("panelFlight")); 
}

function findByID(id){
    for(let panelcarr of panelcar){
        if(panelcarr.id === id){
            return panelcarr;
        }
    }
}
function deletecar(id) {

    // var flightt = findflight(id);

     for (i = 0; i < panelCar.length; i++) {
         if (panelCar[i].id === id) {

            panelCar.splice(i, 1);
         }
         break;
     }
     localStorage.setItem("panelcar", JSON.stringify(panelCar));

     localStorage.getItem("panelcar", JSON.stringify(panelCar));
     
 }
 function deleteThisRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab2").deleteRow(i);
   var Flight = JSON.parse(localStorage.getItem("panelcar")); 
}
function verification() {
    var d = JSON.parse(localStorage.getItem("idtab2"));
    console.log(d);
    if (d == null) {
        
    var s = document.getElementById("lien").innerHTML = window.location.href = "login.html";

        
    }
}




