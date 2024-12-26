const btnScissors = document.querySelector('#scissors'),
	btnPaper = document.querySelector('#paper'),
	btnRock = document.querySelector('#rock'),
	images = document.querySelectorAll('.imgages-wrapper img')

btnRock.addEventListener('click', event => {
	console.log('Rock')
})

btnPaper.addEventListener('click', event => {
	console.log('Paper')
})

btnScissors.addEventListener('click', event => {
	console.log('Scissors')
})
