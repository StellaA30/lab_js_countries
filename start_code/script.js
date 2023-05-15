console.log("Testing, testing, 1 2 3 ...")

const pElement = document.querySelector("p");
const button = document.querySelector("#enter");



const fetchCountries = async () => {
    const countriesResponse = await fetch("https://restcountries.com/v3.1/all");
    const countriesJson = await countriesResponse.json();
    console.log(countriesJson);
    pElement.innerText = ""; // remove the p element ahead of populating the info
    mapCountries(countriesJson); 
}

fetchCountries();


const unOrderedList = document.querySelector("#countriesList");

const mapCountries = (countriesList) => {

    countriesList.forEach(country => {
        const countryItem = document.createElement("li");
        const countryName = country.name.common;
        const countryCapital = country.capital;
        const countryPopulation = country.population;

        const countryFlag = document.createElement("img");
        countryFlag.src = country.flags.png;
        countryItem.innerHTML = "country name: " + countryName + " Capital: " + countryCapital+ " population: " + countryPopulation;
        unOrderedList.appendChild(countryItem);
        countryItem.appendChild(countryFlag);
        
    });

}

// MVP task : 4
const info = document.querySelector("#input");
const form = document.querySelector("form");
const logInput = () => {
    const infoValue = info.value;
    console.log(infoValue);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    logInput();
});

// MVP task : 5




    




