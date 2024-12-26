const btnScissors = document.querySelector('#scissors'),
	btnPaper = document.querySelector('#paper'),
	btnRock = document.querySelector('#rock'),
	result = document.querySelector('.results-wrapper')

let computerChoice = '',
	playerChoice = ''

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
	result.innerHTML = `<h6>You choce rock - Computer chose ${computerChoice}</h6>`
	result.innerHTML += `<h4>          ${chechResult(
		computerChoice,
		playerChoice
	)}</h4>`
})

btnPaper.addEventListener('click', event => {
	playerChoice = 'paper'
	computerPlay()
	result.innerHTML = `<h6>You choce paper - Computer chose ${computerChoice}</h6>`
	result.innerHTML += `<h4>          ${chechResult(
		computerChoice,
		playerChoice
	)}</h4>`
})

btnScissors.addEventListener('click', event => {
	playerChoice = 'scissors'
	computerPlay()
	result.innerHTML = `<h6>You choce scissors - Computer chose ${computerChoice}</h5>`
	result.innerHTML += `<h4>          ${chechResult(
		computerChoice,
		playerChoice
	)}</h4>`
})
