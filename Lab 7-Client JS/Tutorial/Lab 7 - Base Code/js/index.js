const baseURL ='http://universities.hipolabs.com/search?country'
const searchBar = document.querySelector('#search-bar')
const universities = document.querySelector('#universities')
const website = document.querySelector('#website')

function loadUniversities(universities) {

    `<option value="website">the name</option>`
}

async function getUniversities() {
    let url = `${baseURL}=${searchBar.value}`
    let data  = await fetch(url)  //server might take 30 second
    let universities = await data.json()  // long
    loadUniversities(universities)
}
