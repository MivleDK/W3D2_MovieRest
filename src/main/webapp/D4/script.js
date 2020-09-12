/*########################
 * Simple_DOM_manipulation_and_Event_handling_1
 #########################*/
var noOfDivs = document.getElementsByTagName("div");

function colorDivs() {
    var i;
    for (var i = 0; i < noOfDivs.length; i++) {
        noOfDivs[i].style.backgroundColor = "red";
    }
}
;

function changeDivColor() {
    document.getElementById("div1").style.backgroundColor = "#ff0000";
    document.getElementById("div2").style.backgroundColor = "#00ff00";
    document.getElementById("div3").style.backgroundColor = "#0000ff";
}

/*########################
 * Event_Bubbling_and_event_arguments
 #########################*/

function assB(clicked_ID) {
    console.log("Hi from " + clicked_ID);
}

function bubbling() {
    document.getElementById("tomP").innerHTML = event.target.id;
}
;


/*########################
 * Using map to create list’s (ul’s, tables etc.)
 #########################*/
var names = ["Peter", "lars", "Ole", "Janne", "hanne", "Sanne"];

function addUlList() {

    var ulElem = document.createElement("ul");
    var namesToHtmlList = "<ul id=\"ulListe\">" + names.map(function (name) {
        return "<li>" + name + "</li>";
    }).join("") + "</ul>";
    ulElem.innerHTML = namesToHtmlList;
    document.body.appendChild(ulElem);
}

function addToList() {
    var nytNavn = document.getElementById("fname").value;
    names.push(nytNavn);
    var ul = document.getElementById("ulListe")
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(nytNavn));
    ul.appendChild(li);
}

function removeFirst() {
    names.shift();
    var liste = document.getElementById("ulListe");
    liste.removeChild(liste.firstChild);
}

function removeLast() {
    names.pop();
    var liste = document.getElementById("ulListe");
    liste.removeChild(liste.lastElementChild);
}

/*########################
 * Using map and filter to create dynamic table-rows
 #########################*/

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

function carsToTable() {
    carPriceFilter = cars.slice();
    var priceQ = document.getElementById("prisVaelger").value;
    var tbody = document.getElementById("tbody");

    if (priceQ !== "") {
        var carPriceFilter = cars.filter(function (car) {
            if (car.price < priceQ) {
                return carPriceFilter;
            }
        });
    }

    tbody.innerHTML = "";
    var tableRow = document.getElementById("bilTabel");

    var carString = "";
    for (var i = 0; i < carPriceFilter.length; i++) {
        carString += "<tr id=\"liId\" class=\"tr-elem\">\n<td>" + carPriceFilter[i].id + "</td>\n" +
                "<td>" + carPriceFilter[i].year + "</td>\n" +
                "<td>" + carPriceFilter[i].make + "</td>\n" +
                "<td>" + carPriceFilter[i].model + "</td>\n" +
                "<td>" + carPriceFilter[i].price + "</td>\n</tr>\n";
    }
    tbody.innerHTML += carString;
}

/*########################
 * Implement_a_simple_calculator
 #########################*/

//Check whether math was done and reset to prepare for new math.
mathDone = false;

function whatWasClicked(clicked_ID) {
    console.log(clicked_ID);
}

//Registrer hvilken knap der blev klikket på
function bubbles() {
    var clickedID = event.target.id;
    console.log(clickedID);
    addToDisplay(clickedID);
}
;

var foundOperator; //Outside due to scope

function addToDisplay(input) {

    var display = document.getElementById("display");

    if (mathDone) {
        display.innerHTML = "";
        mathDone = false;
    }

    if (input === "comma") {
        display.innerHTML += ",";
    } else if (input >= 0 || input <= 9) {
        display.innerHTML += input;
    } else if (input === "+" || input === "-" || input === "*" || input === "/") {
        display.innerHTML += input;
        foundOperator = input;
        console.log("found operator" + foundOperator);
    } else if (input === "calculate") {
        display = display.innerHTML; //Grab display string
        initCalc(display, foundOperator);
    }
}

function initCalc(display, foundOperator) {

    console.log("found operator: " + foundOperator);
    var operatorIndex;

    for (var i = display.length; i--; ) {
        if (display[i].indexOf(foundOperator) >= 0) {
            operatorIndex = i;
            var preCalc = display.substr(0, operatorIndex);
            console.log("preCalc is: " + preCalc);
            break;
        }
    }
    var postCalc = display.substr(operatorIndex + 1, display.length - 1);
    var operator = display.substr(operatorIndex, 1);
    console.log("postCalc is: " + postCalc);

    doMath(preCalc, postCalc, foundOperator);
}

function doMath(preCalc, postCalc, operator) {
    var display = document.getElementById("display");
    preCalc = parseFloat(preCalc);
    postCalc = parseFloat(postCalc);

    switch (operator) {
        case "+":
            var result = preCalc + postCalc;
            display.innerHTML = result;
            mathDone = true;
            break;
        case "-":
            var result = preCalc - postCalc;
            display.innerHTML = result;
            mathDone = true;
            break;
        case "*":
            var result = preCalc * postCalc;
            display.innerHTML = result;
            mathDone = true;
            break;
        case "/":
            var result = preCalc / postCalc;
            display.innerHTML = result;
            mathDone = true;
            break;
    }
}



