(function(){
const 
  billDisplay = document.getElementById('billResultDisplay'),
  tipButtons = document.querySelectorAll('.tip-btn'), 
  tipInput = document.querySelector('.tip-input'),
  NumberOfPeopleInput = document.getElementById('numberOfPeopleInput'),
  resultAmount = document.getElementsByClassName('tipAmount'),
  tipAmount = resultAmount[0],
  totalAmountPerPerson = resultAmount[1],
  resetButton = document.getElementById('resetButton'),
  costPerPerson = parseFloat(28.51),
  alertMsg_Container = document.querySelector('.alert-text');

function billCalculation(number){
  if(number >= 0 && number < 401){
    let bill

    bill = number * costPerPerson
    let intPart = bill.toLocaleString().split('.')[0]
    let decPart = bill.toLocaleString().split('.')[1]
    if(decPart == undefined) {decPart = '00'}
    console.log(intPart)
    billDisplay.classList.add('active')
    
    billDisplay.innerText = `${intPart}.${decPart}`
    alertMsg_Container.innerText = ''
    NumberOfPeopleInput.classList.remove('active')
    resetButton.classList.add('active')

  } else {
    number > 400 ? 
    alertMsg_Container.innerText = 'Large Number of people' : 
    alertMsg_Container.innerText = 'Invalid Input'
    
    NumberOfPeopleInput.classList.add('active')
  }
}

function calculatResult(number){
  let tipResult, amountResult
  tipResult = costPerPerson * (number / 100)
  amountResult = costPerPerson + tipResult

  tipAmount.innerText = tipResult.toFixed(2)
  totalAmountPerPerson.innerText = amountResult.toFixed(2)
}

function resetCalculator(){
  tipAmount.innerText = '0.00'
  totalAmountPerPerson.innerText = '0.00'
}

function remove_tipBtnClass(){
  tipButtons.forEach(btn =>{
    btn.classList.remove('active')
  })
}

function resetClassRemove(){
  resetButton.classList.remove('active')
}

function calculatorFullReset(){
  remove_tipBtnClass()
  resetCalculator()
  resetClassRemove()
  alertMsg_Container.innerText = ''
  billDisplay.innerText = 0
  tipInput.value = ''
  NumberOfPeopleInput.value = ''
  NumberOfPeopleInput.classList.remove('active')
}

tipButtons.forEach(tipBtn => {
  var percentage = parseFloat(tipBtn.innerText.slice(0,-1))
  console.log(percentage)

  tipBtn.addEventListener('click', () => {
    remove_tipBtnClass()
    tipBtn.classList.add('active')
    resetButton.classList.add('active')

    calculatResult(percentage)
  })
})


// TYPING IN TIP
tipInput.addEventListener('keyup', function(){
  remove_tipBtnClass()
  let inputNumber = parseFloat(this.value)

  if(inputNumber == '' || inputNumber < 0) {
    resetClassRemove()
    resetCalculator()
    return
  }

  if(inputNumber >= 0 && inputNumber < 100){
    alertMsg_Container.innerText = ''
    tipInput.classList.remove('alert')
    resetButton.classList.add('active')

    if( !(resetButton.classList.contains('active')) ){
      resetButton.classList.add('active')
    }

    calculatResult(inputNumber)

  }

})


NumberOfPeopleInput.addEventListener('keyup', function(){
  if(this.value == '') {
    calculatorFullReset()
    return
  }
  inputNumber = parseFloat(this.value)
  billCalculation(inputNumber)
})

resetButton.addEventListener('click', function(){
  if(this.classList.contains('active')){
    calculatorFullReset()
    
  } else {
    return
  }
})

//===================== FOR FUN ========================//
  console.log('I LOVE ' + '🎉')


})()