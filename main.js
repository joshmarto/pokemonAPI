console.log("It works");

const fetchData = document.getElementById("fetchData");

document.addEventListener("DOMContentLoaded", setUp);

function setUp() {
    fetchData.addEventListener("click", prepare);
}

function prepare() {
    newButton("data", "btn btn-info", "Refresh data");
    fetching();
}

function fetching() {
    const randomNum = Math.floor(Math.random() * 286) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        .then(data => data.json())
        .then(d => displayInfo(d))
        .catch(err => alert(err));
}

function newButton(id, clas, text) {
    const container = document.getElementById(id);
    const button = document.createElement("button");
    button.style.display = "block";
    button.style.MarginBottom = "7px";
    button.style.borderBottomColor = "white";
    button.style.borderBottom = "2px";
    button.classList = clas;
    button.innerText = text;
    button.id = "refresh";
    container.insertAdjacentElement("afterbegin", button);
    button.addEventListener("click", refresh);
}

function displayInfo(dataObj) {
    console.log(dataObj);
    const container = document.getElementById("info");
    const lblName = document.createElement("h4");
    const { name, weight, abilities } = dataObj;
    lblName.id = "pokemon-information";
    lblName.innerHTML = `<i>${name}</i> has ${abilities.length} abilities and weights ${weight}`;
    container.appendChild(lblName);
}

function refresh() {
    const container = document.getElementById("info");
    const label = document.getElementById("pokemon-information");
    container.removeChild(label);
    fetching();
}