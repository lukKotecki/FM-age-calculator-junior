
const container = document.getElementsByClassName('container')[0];

const dayInput = document.getElementById('day-input')
const monthInput = document.getElementById('month-input')
const yearInput = document.getElementById('year-input')
const submitButton = document.getElementById('submit-button')
const dateForm = document.getElementById('date-form')

const yearsOutput = document.getElementById('years-output')
const monthsOutput = document.getElementById('months-output')
const daysOutput = document.getElementById('days-output')

const dayError = document.getElementById('day-error')
const monthError = document.getElementById('month-error')
const yearError = document.getElementById('year-error')

submitButton.addEventListener('click', (e) =>{
  e.preventDefault()
  handleSubmit()
  // console.log('kliknieto')
})

// dateForm.addEventListener('submit', (e) =>{
//   e.preventDefault()
//   handleSubmit()
//   console.log('kliknieto')
// })



function handleSubmit(){
    const day = dayInput.value
    const month = monthInput.value
    const year = yearInput.value
    const dateObject = {year,month,day}
    
    if(isDateValid(dateObject)){
        console.log('Data nie jest prawidłowa')


    }

    console.log(dateObject)

}

function isDateValid(dateObject){


    return dateObject
}



function checkPastDate(stringDate){
const inputDate = new Date(stringDate); 
const currentDate = new Date();
if (inputDate < currentDate) {
  console.log('The input date is in the past.');
} else {
  console.log('The input date is in the future.');
}
}