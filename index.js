
const container = document.getElementsByClassName('container')[0];
const submitButton = document.getElementById('submit-button')
const dateForm = document.getElementById('date-form')

const dayInput = document.getElementById('day-input')
const monthInput = document.getElementById('month-input')
const yearInput = document.getElementById('year-input')
const yearsOutput = document.getElementById('years-output')
const monthsOutput = document.getElementById('months-output')
const daysOutput = document.getElementById('days-output')

const dayError = document.getElementById('day-error')
const monthError = document.getElementById('month-error')
const yearError = document.getElementById('year-error')
const labelList = document.getElementsByClassName('label-list')
const inputList = document.getElementsByClassName('input')

submitButton.addEventListener('click', (e) =>{
  e.preventDefault()
  handleSubmit()
})


function handleSubmit(){
    const day = Number(dayInput.value)
    const month = Number(monthInput.value)
    const year = Number(yearInput.value)
    const dateObject = {year,month,day}
    
    if(isDateValid(dateObject)){
        console.log('Data jest prawidłowa')

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth()+1;
        const currentDay = currentDate.getDate();

        let yearsDifference = currentYear - year
        let monthsDifference = currentMonth - month
        let daysDifference = currentDay - day
        
        const lastDayOfMonth = new Date(year, month, 0).getDate();
        
        if(daysDifference<0){
          monthsDifference--
          daysDifference+= lastDayOfMonth
        }
        if(monthsDifference<0){
          yearsDifference--
          monthsDifference+=12
        }

        yearsOutput.textContent = yearsDifference
        monthsOutput.textContent = monthsDifference
        daysOutput.textContent = daysDifference
    }
}

function isDateValid(dateObject){
  const currentDay = new Date()
  let isDateValid = true;
  clearInputErrors()

  if(dateObject.year>currentDay.getFullYear()){
    yearError.textContent = 'Must be in the past'
    labelList[2].classList.add('error')
    inputList[2].classList.add('error-border')
    isDateValid = false;
  } 
  if((dateObject.year == currentDay.getFullYear()) && (dateObject.month>currentDay.getMonth()+1)){
    monthError.textContent = 'Must be in the past'
    labelList[1].classList.add('error')
    inputList[1].classList.add('error-border')
    isDateValid = false;
  } 
  if((dateObject.year == currentDay.getFullYear()) && (dateObject.month == currentDay.getMonth()+1) && (dateObject.day>currentDay.getDate())){
    dayError.textContent = 'Must be in the past'
    labelList[0].classList.add('error')
    inputList[0].classList.add('error-border')
    isDateValid = false;
  } 

  if(dateObject.month>12 || dateObject.month<1){
    monthError.textContent = 'Must be a valid month'
    labelList[1].classList.add('error')
    inputList[1].classList.add('error-border')
    isDateValid = false;
  }
  if(dateObject.day > (new Date(Object.values(dateObject).join('/')).getDate())){
    dayError.textContent = 'Must be a valid date'
    for(label of labelList){
      label.classList.add('error')
    }
    for(input of inputList){
      input.classList.add('error-border')
    }
    isDateValid = false;
  }
  if(dateObject.day>31 || dateObject.day<1){
    dayError.textContent = 'Must be a valid day'
    labelList[0].classList.add('error')
    inputList[0].classList.add('error-border')
    isDateValid = false;
  }
  if(!dateObject.year){
    yearError.textContent = 'This field is required'
    labelList[2].classList.add('error')
    inputList[2].classList.add('error-border')
    isDateValid = false;
  }
  if(!dateObject.month){
    monthError.textContent = 'This field is required'
    labelList[1].classList.add('error')
    inputList[1].classList.add('error-border')
    isDateValid = false;
  }
  if(!dateObject.day){
    dayError.textContent = 'This field is required'
    labelList[0].classList.add('error')
    inputList[0].classList.add('error-border')
    isDateValid = false;
  }
  return isDateValid
}

function clearInputErrors(){
  yearError.textContent = ''
  monthError.textContent = ''
  dayError.textContent = ''
  for(label of labelList){
    label.classList.remove('error')
  }
  for(input of inputList){
    input.classList.remove('error-border')
  }
}

