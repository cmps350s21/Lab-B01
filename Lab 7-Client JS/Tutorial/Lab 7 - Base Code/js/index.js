const baseURL = 'http://universities.hipolabs.com/search?country'
const searchBar = document.querySelector('#search-bar')
const universitiesDD = document.querySelector('#universities')
const website = document.querySelector('#website')

async function getUniversities() {
    let url = `${baseURL}=${searchBar.value}`
    let data = await fetch(url)  //server might take 30 second
    let universities = await data.json()  // long
    loadUniversities(universities)
    localStorage.setItem('universities' , JSON.stringify(universities))
}

function loadUniversities(universities) {
    let uniOptions = universities
        .map(uni => `<option value=${uni.web_pages[0]}>${uni.name}</option>`)
        .join('')
    universitiesDD.innerHTML = uniOptions
    loadWebsite(universities[0].web_pages[0])


}

function showNumber(){
    let number = localStorage.getItem('universities')
    console.log(JSON.parse(number))
}


function loadWebsite(websiteUrl){website.src = websiteUrl}


