//Step 1 : to get the reference for our views
const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')
const formElement = document.querySelector('#form')
const countriesTable = document.querySelector('#countries')

//Step 2 : when the button is clicked I want a function called addCensus
formElement.addEventListener('submit', addCensus)

// Step 0 : create/open our database
const db = new Localbase('census.db')

let isEdit = false;
let censusTobeEdited;
//Step 0.1 :
showCensusData('1000') //open the database and load the collection documents

async function showCensusData(noOfRecords) {
    const census = await db
        .collection('census')
        .orderBy('country', 'asc')
        .limit(parseInt(noOfRecords))
        .get()

    const rows = census.map(c => censusToHTMLRaw(c))
    countriesTable.innerHTML = `
               <thead>
                    <tr>
                        <th>Country</th>
                        <th>Population</th>
                        <th>Action</th>
                    </tr>
               </thead>
               ${rows.join('')}
        `
}

async function addCensus(event) {
    if (!formElement.checkValidity()) return

    //convert this form into a census object
    event.preventDefault();
    const newCensus = form2Object(formElement)
    newCensus.population = parseInt(newCensus.population.toString())

    //to add this census to the indexDB database in a collection
    //called census //long running operation
    if (isEdit) {
        let successMessage = await db.collection('census').doc({id: censusTobeEdited.id}).update(newCensus)
        // let successMessage = await db.collection('census').doc({id: censusTobeEdited.id}).set(newCensus)


    } else {
        newCensus.id = Date.now()
        let successMessage = await db.collection('census').add(newCensus)
        // const newCensusRow = censusToHTMLRaw(newCensus)
        // countriesTable.innerHTML += newCensusRow
    }
    await showCensusData()
    formElement.reset()
    isEdit = false
}

async function deleteCensus(cid, ele) {
    await db.collection('census').doc({id: parseInt(cid)}).delete()
    await showCensusData()
}

async function editCensus(cid) {
    censusTobeEdited = await db.collection('census').doc({id: parseInt(cid)}).get()
    countryInputBox.value = censusTobeEdited.country
    populationInputBox.value = censusTobeEdited.population
    isEdit = true
}

function censusToHTMLRaw(c) {
    return `
        <tr>
            <td>${c.country}</td>
            <td>${c.population}</td>
            <td>
                <i class="fa fa-pencil" onclick="editCensus('${c.id}')">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${c.id}')">Delete</i>
            </td>
        </tr>
    `
}
function form2Object(formElement) {
    const formData = new FormData(formElement);
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return data;
}