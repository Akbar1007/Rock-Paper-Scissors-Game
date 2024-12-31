const btnScissors = document.querySelector('#scissors'),
	btnPaper = document.querySelector('#paper'),
	btnRock = document.querySelector('#rock'),
	result = document.querySelector('.results-container'),
	resetBtn = document.createElement('button')

resetBtn.textContent = 'Reset'
document.result.appendChild(resetBtn)

let computerChoice = '',
	playerChoice = ''

result.innerHTML = `<h4>Choose your weapon</h4>`

function computerPlay() {
	let options = ['rock', 'paper', 'scissors']
	return (computerChoice = options[Math.floor(Math.random() * options.length)])
}

function chechResult(computerChoice, playerChoice) {
	if (computerChoice === playerChoice) {
		return 'Draw'
	} else if (
		(computerChoice === 'rock' && playerChoice === 'scissors') ||
		(computerChoice === 'scissors' && playerChoice === 'paper') ||
		(computerChoice === 'paper' && playerChoice === 'rock')
	) {
		return 'You lost.'
	} else {
		return 'You win.'
	}
}

btnRock.addEventListener('click', event => {
	playerChoice = 'rock'
	computerPlay()
	result.innerHTML = `<h4>You chose rock - Computer chose ${computerChoice}</h4>`
	result.innerHTML += `<h4>          ${chechResult(
		computerChoice,
		playerChoice
	)}</h4>`
})

btnPaper.addEventListener('click', event => {
	playerChoice = 'paper'
	computerPlay()
	result.innerHTML = `<h4>You chose paper - Computer chose ${computerChoice}</h4>`
	result.innerHTML += `<h4>          ${chechResult(
		computerChoice,
		playerChoice
	)}</h4>`
})

btnScissors.addEventListener('click', event => {
	playerChoice = 'scissors'
	computerPlay()
	result.innerHTML = `<h4>You chose scissors - Computer chose ${computerChoice}</h4>`
	result.innerHTML += `<h4>          ${chechResult(
		computerChoice,

		playerChoice
	)}</h4>`
})

// for future:
// Remove repetition: The addEventListener functions for each button are repetitive. You can simplify them by using a single function and mapping the button IDs to the player's choice.
