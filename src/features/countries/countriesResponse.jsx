export const countriesResponse = (res) => ({
    flag: res.flags?.png || "",
    name: res.name.common,
    population: res.population,
    region: res.region,
    capital: res.capital,
})