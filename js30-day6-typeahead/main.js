const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

// build in browser get api stuff
// fetch returns a promise
// blob.json calls another prmose
fetch(endpoint)
 .then(blob => blob.json())
 .then(data => cities.push(...data));

 function findMatches(wordtoMatch, cities) {
     return cities.filter(place => {
         const regex = new RegExp(wordtoMatch, 'gi') // g - global, i - case insensitive
         return place.city.match(regex) || place.state.match(regex)
     });
 }

function displayMatches() {
    console.log(this.value)
    const matchArray = findMatches(this.value, cities)
    console.log(matchArray)
    const html = matchArray.map(place => {
        const toHighlight = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(toHighlight, `<span class = "hl">${this.value}</span>`)
        const stateName = place.state.replace(toHighlight, `<span class = "hl">${this.value}</span>`)
        const pop = addCommas(place.population);
        return`  <li>
                <span class = "name">${cityName}, ${stateName}</span>
                <span class = "population">${pop}</span>
            </li>
        `;
    }).join('');
    placeSuggestions.innerHTML = html;
 }

function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
 // now interact with our DOM

const searchInput = document.querySelector('.search')
const placeSuggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
// change event only fires when go off input
searchInput.addEventListener('keyup', displayMatches)
