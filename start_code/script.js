console.log("Testing, testing, 1 2 3 ...")

const fetchCountries = async () => {
    const countriesResponse = await fetch("https://restcountries.com/v3.1/all");
    const countriesJson = await countriesResponse.json();
}  