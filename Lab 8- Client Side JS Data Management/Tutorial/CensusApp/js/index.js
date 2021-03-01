// document.addEventListener('DOMContentLoaded', ()=>{
//     //Step 1
// })

//Step 1 : to get the reference for our views
const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')
const formElement = document.querySelector('#form')
const countriesTable = document.querySelector('#countries')


//Step 2 : when the button is clicked I want a function called addCensus
formElement.addEventListener('submit', addCensus)

// Step 0 : create/open our database
const db = new Localbase('census.db')

//Step 0.1 :
showCensusData() //open the database and load the collection documents

async function showCensusData() {
    const census = await db.collection('census').get()
    const rows = census.map(c => censusToHTMLRaw(c))
    countriesTable.innerHTML = `
               <thead>
                    <tr>
                        <th>Country</th>
                        <th>Population</th>
                        <th>Action</th>
                    </tr>
               </thead>
               ${ rows.join('')}
        `
}

function censusToHTMLRaw(c) {
    return `
        <tr>
            <td>${c.country}</td>
            <td>${c.population}</td>
            <td>
                <i class="fa fa-pencil">Edit</i>
                <i class="fa fa-trash">Delete</i>
            </td>
        </tr>
    `
}

async function addCensus(event) {
    if (!formElement.checkValidity()) return

    //convert this form into a census object
    event.preventDefault();
    const newCensus = form2Object(formElement)
    newCensus.id = Date.now()

    //to add this census to the indexDB database in a collection
    //called census //long running operation
    let successMessage = await db.collection('census').add(newCensus)

    //we call again the show
    const newCensusRow = censusToHTMLRaw(newCensus)
    countriesTable.innerHTML += newCensusRow
}

function form2Object(formElement) {
    const formData = new FormData(formElement);
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return data;
}