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
        // countryItem.innerHTML = "country name: " + countryName + " Capital: " + countryCapital+ " population: " + countryPopulation;
        countryItem.innerHTML = "country name: " + countryName +", population: " + countryPopulation;
        unOrderedList.appendChild(countryItem);
        countryItem.appendChild(countryFlag);
        
    });

}

// MVP task : 4
const info = document.querySelector("#input");
const form = document.querySelector("form");


//function that extract the input value
const logInput = () => {
    const infoValue = info.value;
    return infoValue;
}

// event listener to log the input value 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    infoToLog = logInput();
    console.log(infoToLog);
});


// MVP task : 5 filters
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     countryInput = logInput().toLowerCase();
//     const countriesList = document.querySelectorAll("li");
//     const list = document.querySelector("ul");

//     for(let i = 0; i < countriesList.length; i++){
//         const country = countriesList[i].innerText.toLowerCase();
//         if ((country.includes(countryInput))){
//             continue;
//         }else{
//             list.removeChild(countriesList[i]);
//         }
//     }
// })



//Extensions
// Task 7

form.addEventListener("submit", (event) => {
    const newSentence = document.createElement("p");
    newSentence.innerText = "Awaiting API.."
    event.preventDefault();
    countryInput = logInput().toLowerCase();
    const countriesList = document.querySelectorAll("li");
    const list = document.querySelector("ul");
    setTimeout(function() {
 
    
        for(let i = 0; i < countriesList.length; i++){
            const country = countriesList[i].innerText.toLowerCase();
            if ((country.includes(countryInput))){
                continue;
            }else{
                list.removeChild(countriesList[i]);
            }
        }


    }, 2000);

    
    // event.preventDefault();
    // countryInput = logInput().toLowerCase();
    // const countriesList = document.querySelectorAll("li");
    // const list = document.querySelector("ul");

    // for(let i = 0; i < countriesList.length; i++){
    //     const country = countriesList[i].innerText.toLowerCase();
    //     if ((country.includes(countryInput))){
    //         continue;
    //     }else{
    //         list.removeChild(countriesList[i]);
    //     }
    // }
})









    




