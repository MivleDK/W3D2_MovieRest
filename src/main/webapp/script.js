function doRestAll() {
    let idFromInput = document.getElementById("efterID").value;
    let pTag = document.getElementById("restPlaceholder");
    let url = "https://micklarsen.com/W3D2_EX2/api/movie/all";
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    var tableRow = document.getElementById("pTable");

    fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                restTable(data);
            });
}

function antalFilm() {
    let idFromInput = document.getElementById("efterID").value;
    let antalFilm = document.getElementById("antalFilm");
    let url = "http://localhost:8080/jpareststarter/api/movie/count";
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                antalFilm.innerHTML = data.count;
            });
}

function efterID() {
    tbody.innerHTML = "";
    let idFromInput = document.getElementById("efterID").value;
    let url = "http://localhost:8080/jpareststarter/api/movie/" + idFromInput;
    console.log(idFromInput);
    fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                restTableByID(data);
            });
}

function efterTitel() {
    let titelSoeg = document.getElementById("efterTitel").value;
    let antalFilm = document.getElementById("antalFilm");
    let url = "http://localhost:8080/jpareststarter/api/movie/title/" + titelSoeg;
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                restTable(data);
            });

}

function restTable(data) {
    var pString = "";
    for (var i in data) {
        pString += "<tr id=\"liId\" class=\"tr-elem\">\n<td>" + data[i].id + "</td>\n" + "<td>" + data[i].year + "</td>\n" + "<td>" + data[i].title + "</td>\n</tr>\n";
    }
    tbody.innerHTML += pString;
}

function restTableByID(data) {
    var pString = "";
    pString += "<tr id=\"liId\" class=\"tr-elem\">\n<td>" + data.id + "</td>\n" + "<td>" + data.year + "</td>\n" + "<td>" + data.title + "</td>\n</tr>\n";
    tbody.innerHTML += pString;
}