
const btn = document.querySelector(".btn");
const inputElement = document.querySelector(".inputElement");

btn.addEventListener("click", getData);

function getData() {
    let country = inputElement.value;
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9d45129922msh689ae8e9d3a1643p1bbf46jsn3747b37e320d',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        },
    })
    .then((response) => response.json())
    .then((json) => {
        let data = json.response[0];
        document.querySelector(".activeCases").innerHTML = data.cases.active || "-0";
        document.querySelector(".newCases").innerHTML = data.cases.new || "-0";
        document.querySelector(".recoveredCases").innerHTML = data.cases.recovered || "-0";
        document.querySelector(".totalCases").innerHTML = data.cases.total || "-0";
        document.querySelector(".totalDeaths").innerHTML = data.deaths.total || "-0";
        document.querySelector(".totalTests").innerHTML = data.tests.total || "-0";
    })
    .catch((error) => {
        console.error("Terjadi kesalahan:", error);
    });
}
