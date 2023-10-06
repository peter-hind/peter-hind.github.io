//create variable to hold pressed button
//create variable to hold individual entries
//create variable/array to hold entire calculation

//create function to identify button pushed, update variables and screen accordingly
//create function to carry out calculation, update variable and screen accordingly

//fix all the problems I haven't thought of yet

const buttons = document.getElementsByTagName('button')
const screen = document.getElementById('screen')

let buttonPress = ''
let entry = ''
let calculation = []

function filterInput(e) {
  buttonPress = e.target.innerHTML
  switch (buttonPress) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      updateEntry(buttonPress)
      break
    case 'AC':
      clearCalculation()
      break
    case 'CE':
      clearEntry()
      break
    case '=':
      processCalculation()
      break
    default:
      logEntry(buttonPress)
  }
}

function updateEntry(buttonPress) {
  entry += buttonPress
  updateDisplay(entry)
}

function clearCalculation() {
  calculation = []
  entry = ''
  updateDisplay(entry)
}

function clearEntry() {
  entry = ''
  updateDisplay(entry)
}

function logEntry(buttonPress) {
  calculation.push(entry)
  calculation.push(buttonPress)
  entry = ''
  updateDisplay(entry)
}

function processCalculation() {
  calculation.push(entry)
  let total = 0
  for (let i = 0; i < calculation.length; i++) {
    let current = calculation[i]
    let next = Number(calculation[i + 1])
    if (i === 0) {
      total += Number(calculation[i])
    } else if (current === '+') {
      total += next
    } else if (current === '-') {
      total -= next
    } else if (current === 'x') {
      total *= next
    } else if (current === '÷') {
      total /= next
    }
  }

  updateDisplay(total)
  calculation = []
  entry = ''
}

function updateDisplay(content) {
  screen.value = content
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = filterInput
}
