let songsList = list = document.querySelector('.songsList');
let radioButtonsDiv = document.querySelector('.radioButtons');
let totalLengthOutput = document.querySelector('.totalLength').children[0];
let minRegex = /^\d+/;
let secRegex = /\d+$/;


const filter = function(e){
	let secondPile = 0;
	let minutePile = 0;
	let hourPile = 0;
	let genre = `${e.target.attributes.id.value}`;


	/*Loop through all the tracks. Hide the ones with different genres while making a combined pile of total seconds and minutes from the tracks*/
	for(let i=0; i<songsList.children.length; i+=1){
		if(songsList.children[i].classList.contains(genre)){
			secondPile += +songsList.children[i].dataset.track_length.match(secRegex)[0];
			minutePile += +songsList.children[i].dataset.track_length.match(minRegex)[0];

			songsList.children[i].classList.remove('hidden');
		}else{
			songsList.children[i].classList.add('hidden');
		}
	}

	for(secondPile; secondPile>= 60; secondPile -=60){	/*Convert excess seconds into minutes*/
		minutePile+=1;
	}
	if(secondPile < 10){
		secondPile = `0${secondPile}`;
	}
	for(minutePile; minutePile>=60; minutePile-=60){	/*Convert excess minutes into hours*/
		hourPile+=1;
	}
	if(minutePile < 10){
		minutePile = `0${minutePile}`;
	}
	totalLengthOutput.textContent = `${hourPile}:${minutePile}:${secondPile}`;
}


radioButtonsDiv.addEventListener('click', filter);