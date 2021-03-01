// document.addEventListener('DOMContentLoaded', ()=>{
//     //Step 1
// })

//Step 1 : to get the reference for our views
const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')
const formElement = document.querySelector('#form')


//Step 2 : when the button is clicked I want a function called addCensus
formElement.addEventListener('submit', addCensus)

// Step 0 : create/open our database
const db = new Localbase('census.db')

async function addCensus(event) {
    if (!formElement.checkValidity()) return

    //convert this form into a census object
    event.preventDefault();
    const newCensus = form2Object(formElement)

    //to add this census to the indexDB database in a collection
    //called census
    //long running operation
    let successMessage = await db.collection('census').add(newCensus)
    console.log(successMessage)

}
function form2Object(formElement) {
    const formData = new FormData(formElement);
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return data;
}