
/////////////////////**************** CRUD Flight ********************//////////////////////

function ajoutFlight() {

    var tabFlight = [{ destination: "Paris", departure: "06/10/2018", return: "14/10/2018", airlines: "AirFrance", price: "250", way: "Direct" }];

    var monTitre = document.getElementById("title1").innerHTML =
        `<label style="color:White font-size:20px">Add Flight</label>`;

    var myFlights = document.getElementById("container1").innerHTML =
        `<table id="tab2">
        <tr>
        <td>Destination</td>
        <td><input id="des" type="text"></td></tr>
        <tr>
        <td>Departure</td>
        <td><input id="dep" type="date"></td></tr>
        <tr>
        <td>Return</td>
        <td><input id="ret" type="date"></td></tr>
        <tr>
        <td>Airlines</td>
        <td><input id="air" type="text"></td></tr>
        <tr>
        <td>Price</td>
        <td><input id="price1" type="number"></td>
        </tr>
        <tr>
        <td>Way</way>
        <td><input id="way" type="text"></td></tr>
        </table>
        <button id="ajou" type="button" onclick="addFlight()">Add</button>
        <button id="reset" type="button" onclick="reset()">Cancel</button>
         `;

    //console.log(myFlights);

}
var tabFlight = [{ id: generateUid(),destination: "Paris", departure: "06/10/2018", return: "14/10/2018", airlines: "AirFrance", price: "250", way: "Direct" }];

function addFlight() {


    var des1 = document.getElementById("des").value;
    var dep1 = document.getElementById("dep").value;
    var ret1 = document.getElementById("ret").value;
    var air1 = document.getElementById("air").value;
    var p = document.getElementById("price1").value;
    var w = document.getElementById("way").value;

    // enregister les inputs dans le tableau tab
    tabFlight.push({ id: generateUid(), destination: des1, departure: dep1, return: ret1, airlines: air1, price: p, way: w });

    console.log(tabFlight);

    // enregister le tableau dans le localstorage 
    localStorage.setItem("tabF", JSON.stringify(tabFlight));

    // donner une variable pour appeler le tableau
    var z = JSON.parse(localStorage.getItem("tabF"));

    // console.log(z);
    var msg = document.getElementById("container1").innerHTML = "Flight has been successfully added";
}

function generateUid() {
    var uniqueId = Math.random().toString(36).substring(2)
        + (new Date()).getTime().toString(36);
    return uniqueId;
}

var tabFlight = [{ id: generateUid(),destination: "Paris", departure: "06/10/2018", return: "14/10/2018", airlines: "AirFrance", price: "250", way: "Direct" }];

function AfficherListeFlights() {


    var monTitre2 = document.getElementById("title1").innerHTML =
        `<label style="color:White font-size:20px">Delete Flight</label>`;

    var z = JSON.parse(localStorage.getItem("tabF"));
    var tabString = `<label id="label1">Search</label><input id="search1" onkeyup="searchTable()" type="text"><table id="tab1">
        <tr>
        <th>Destination</th>
        <th>Departure</th>
        <th>Return</th>
        <th>Airlines</th>
        <th>Price</th>
        <th>Way</th>
        <th>Select</th>
        </tr>   ` ;

    for (i = 0; i < z.length; i++) {
        tabString = tabString + `<tr>
        <td>`+ z[i].destination + `</td>
        <td>`+ z[i].departure + `</td>
        <td>`+ z[i].return + `</td>
        <td>`+ z[i].airlines + `</td>
        <td>`+ z[i].price + `</td>
        <td>`+ z[i].way + `</td>
        <td><button id="supp" type="button" onclick="deleteFlight(id),deleteRow(this)">Delete</button></td>
         </tr>`;
    }

    tabString = tabString + `</table>`;
    var myFlights1 = document.getElementById("container1").innerHTML = tabString;
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab1").deleteRow(i);


    var flights = JSON.parse(localStorage.getItem("tabF"));
    AfficherListeFlights();


}
function deleteFlight(id) {

    // var flightt = findflight(id);

    for (i = 0; i < tabFlight.length; i++) {
        if (tabFlight[i].id === id) {

            tabFlight.splice(i, 1);
        }
        break;
    }
    localStorage.setItem("tabF", JSON.stringify(tabFlight));

    localStorage.getItem("tabF", JSON.stringify(tabFlight));

}

function findflight(id) {

    for (let flight of flights) {
        if (flight.id === id) {
            return flight;
        }
    }
}

//////////********** CRUD HOTEL **********////////////////////////

var tabHotel = [{ destination: "Paris", hotel: "concorde", stars: "5 stars", room: "single", guest: "2", price: "150" }];

function ajoutHotel() {

    var monTitre1 = document.getElementById("title1").innerHTML = `<label style="color:White font-size:20px">Add Hotel</label>`;

    var myHotel = document.getElementById("container1").innerHTML =
        `<table id="tab2">
        <tr>
        <td>Destination</td>
        <td><input id="desti" type="text"></td></tr>
        <tr>
        <td>Hotel</td>
        <td><input id="hot" type="text"></td></tr>
        <tr>
        <td>Stars</td>
        <td><input id="st" type="text"></td></tr>
        <tr>
        <td>Room</td>
        <td><input id="rm" type="text"></td></tr>
        <tr>
        <td>Guest</td>
        <td><input id="gst" type="number"></td></tr>
        <tr>
        <td>Price</td>
        <td><input id="price1" type="number"></td></tr>
        </table>
        <button id="ajou" type="button" onclick="addHotel()">Add</button>
        <button id="reset" type="button" onclick="reset()">Cancel</button>
         `;

}
var tabHotel = [{ id: generateUid(),destination: "Paris", hotel: "concorde", stars: "5 stars", room: "single", guest: "2", price: "150" }];

function addHotel() {

    var desti1 = document.getElementById("desti").value;
    var hot1 = document.getElementById("hot").value;
    var st1 = document.getElementById("st").value;
    var rm1 = document.getElementById("rm").value;
    var gst1 = document.getElementById("gst").value;
    var p1 = document.getElementById("price1").value;

    // enregister les inputs dans le tableau tab
    tabHotel.push({ id: generateUid(), destination: desti1, hotel: hot1, stars: st1, room: rm1, guest: gst1, price: p1 });

    console.log(tabHotel);

    // enregister le tableau dans le localstorage 
    localStorage.setItem("tabH", JSON.stringify(tabHotel));

    // donner une variable pour appeler le tableau
    var x = JSON.parse(localStorage.getItem("tabH"));

    // console.log(z);
    var msg2 = document.getElementById("container1").innerHTML = "Hotel has been successfully added";
}

var tabHotel = [{ id: generateUid(), destination: "Paris", hotel: "concorde", stars: "5 stars", room: "single", guest: "2", price: "150" }];

function AfficherListeHotels() {


    var monTitre2 = document.getElementById("title1").innerHTML =
        `<label style="color:White font-size:20px">Delete Hotel</label>`;

    var x = JSON.parse(localStorage.getItem("tabH"));
    var tabString = `<label id="label1">Search</label><input id="search1" onkeyup="searchTable()" type="text"><table id="tab1">
        <tr>
        <th>Destination</th>
        <th>Hotel</th>
        <th>Stars</th>
        <th>Room</th>
        <th>Guest</th>
        <th>Price</th>
        <th>Select</th>
        </tr>   ` ;

    for (i = 0; i < x.length; i++) {
        tabString = tabString + `<tr>
        <td>`+ x[i].destination + `</td>
        <td>`+ x[i].hotel + `</td>
        <td>`+ x[i].stars + `</td>
        <td>`+ x[i].room + `</td>
        <td>`+ x[i].guest + `</td>
        <td>`+ x[i].price + `</td>
        <td><button id="supp" type="button" onclick="deleteHotel(id), deleteRow(this)">Delete</button></td>
         </tr>`;
    }

    tabString = tabString + `</table>`;
    var myHotel1 = document.getElementById("container1").innerHTML = tabString;
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab1").deleteRow(i);
    var hotels = JSON.parse(localStorage.getItem("tabH"));

}
function deleteHotel(id) {

    for (i = 0; i < tabHotel.length; i++) {
        if (tabHotel[i].id === id) {

            tabHotel.splice(i, 1);
        }
        break;
    }
    localStorage.setItem("tabH", JSON.stringify(tabHotel));

    localStorage.getItem("tabH", JSON.stringify(tabHotel));

}

function findhotel(id) {
    var hotels = JSON.parse(localStorage.getItem("tabH"));
    for (let hotel of hotels) {
        if (hotel.id === id) {
            return hotel;
        }
    }
}

//////////********** CRUD CAR **********////////////////////////

var tabCar = [{ car: "chevrolet", pickup: "06/10/2018", dropoff: "10/10/2018", duration: "4", price: "400" }];

function ajoutCar() {

    var monTitre = document.getElementById("title1").innerHTML = `<label style="color:White font-size:20px">Add Car</label>`;;

    var myCar = document.getElementById("container1").innerHTML =
        `<table id="tab2">
        <tr>
        <td>Car</td>
        <td><input id="cars" type="text"></td></tr>
        <tr>
        <td>Pick Up</td>
        <td><input id="pup" type="date"></td></tr>
        <tr>
        <td>Drop Off</td>
        <td><input id="drf" type="date"></td></tr>
        <tr>
        <td>Duration</td>
        <td><input id="dur" type="number"></td></tr>
        <tr>
        <td>Price</td>
        <td><input id="price2" type="number"></td></tr>
        </table>
        <button id="ajou" type="button" onclick="addCar()">Add</button>
        <button id="reset" type="button" onclick="reset()">Cancel</button>
         `;

}
var tabCar = [{ id: generateUid(),car: "chevrolet", pickup: "06/10/2018", dropoff: "10/10/2018", duration: "4", price: "400" }];

function addCar() {

    var cars1 = document.getElementById("cars").value;
    var pup1 = document.getElementById("pup").value;
    var drf1 = document.getElementById("drf").value;
    var dur1 = document.getElementById("dur").value;
    var p2 = document.getElementById("price2").value;

    // enregister les inputs dans le tableau tab
    tabCar.push({ id: generateUid(), car: cars1, pickup: pup1, dropoff: drf1, duration: dur1, price: p2 });

    console.log(tabCar);

    // enregister le tableau dans le localstorage 
    localStorage.setItem("tabC", JSON.stringify(tabCar));

    // donner une variable pour appeler le tableau
    var y = JSON.parse(localStorage.getItem("tabC"));

    // console.log(z);
    var msg3 = document.getElementById("container1").innerHTML = "Car has been successfully added";
}

var tabCar = [{ id: generateUid(), car: "chevrolet", pickup: "06/10/2018", dropoff: "10/10/2018", duration: "4", price: "400" }];

function AfficherListeCars() {


    var monTitre2 = document.getElementById("title1").innerHTML =
        `<label style="color:White font-size:20px">Delete Car</label>`;

    var y = JSON.parse(localStorage.getItem("tabC"));
    var tabString = `<label id="label1">Search</label><input id="search1" onkeyup="searchTable()" type="text"><table id="tab1">
        <tr>
        <th>Car</th>
        <th>Pick Up</th>
        <th>Drop Off</th>
        <th>Duration</th>
        <th>Price</th>
        <th>Select</th>
        </tr>   ` ;

    for (i = 0; i < y.length; i++) {
        tabString = tabString + `<tr id="tr1">
        <td>`+ y[i].car + `</td>
        <td>`+ y[i].pickup + `</td>
        <td>`+ y[i].dropoff + `</td>
        <td>`+ y[i].duration + `</td>
        <td>`+ y[i].price + `</td>
        <td><button id="supp" type="button" onclick="deleteCar(id), deleteRow(this)" >Delete</button></td>
         </tr>`;
    }

    tabString = tabString + `</table>`;
    var myCar1 = document.getElementById("container1").innerHTML = tabString;

}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab1").deleteRow(i);
    var cars2 = JSON.parse(localStorage.getItem("tabC"));

}
function deleteCar(id) {

    for (i = 0; i < tabCar.length; i++) {
        if (tabCar[i].id === id) {

            tabCar.splice(i, 1);
        }
        break;
    }
    localStorage.setItem("tabC", JSON.stringify(tabCar));

    localStorage.getItem("tabC", JSON.stringify(tabCar));

}

function findcar(id) {
    var cars2 = JSON.parse(localStorage.getItem("tabC"));
    for (let cc of cars2) {
        if (cars2.id === id) {
            return cc;
        }
    }
}



function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("search1");
    filter = input.value.toUpperCase();
    table = document.getElementById("tab1");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}
function verification() {
    var d = JSON.parse(localStorage.getItem("idtab2"));
    console.log(d);
    if (d == null) {
        
    var s = document.getElementById("lien").innerHTML = window.location.href = "login.html";

        
    }
}


