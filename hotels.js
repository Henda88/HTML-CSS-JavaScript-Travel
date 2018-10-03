var tabHotels = JSON.parse(localStorage.getItem("tabH"));
var html = `<table>
<tr>
<th>Destination</th>
<th>Hotel</th>
<th>Stars</th>
<th>Room</th>
<th>Guest</th>
<th>Price</th>
<th>Select</th>
</tr>
`;
for(let tabHotelss of tabHotels) {
    html = html + `<tr>
    <td>${tabHotelss.destination}</td>
    <td>${tabHotelss.hotel}</td>
    <td>${tabHotelss.stars}</td>
    <td>${tabHotelss.room}</td>
    <td>${tabHotelss.guest}</td>
    <td>${tabHotelss.price}</td>
    <td><button type =button onclick=addToPanel("${tabHotelss.id}")>Add to panel</button></td>
    </tr>`
}
html += '</table>';
var abc = document.getElementById("tableaux").innerHTML = html;
function addToPanel(id){
    var hotelss = findIDhotel(id);
    add.push(hotelss);
    localStorage.setItem("panelhotel",JSON.stringify(add));
}
function findIDhotel(id){
    for(let tabHotelss of tabHotels) {
        if (tabHotelss.id === id) {
            return tabHotelss;
        }
    }
}
var add = [];
function verification() {
    var d = JSON.parse(localStorage.getItem("idtab2"));
    console.log(d);
    if (d == null) {
        
    var s = document.getElementById("lien").innerHTML = window.location.href = "login.html";

        
    }
}