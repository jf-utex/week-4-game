

var targetNumber = (Math.floor(Math.random()*(120-19+1))+19);  
// GENERATES RANDOM NUMBER FOR PLAYER GOAL  math.random generates number between 0 and 1 to get a number between 0 and ten multiply by 10, math.floor rounds down to the nearest whole number 

// generates random number integers for the crystal
var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 12+1));
console.log(numberOptions);

var numWins=0;
var numLosses=0;
var counter=0;
var crystalValue=0;

document.getElementById("target").innerHTML=targetNumber;  

	for(var i = 0; i < numberOptions.length; i++){

		var imageCrystal = document.getElementById("bcrystal");
		imageCrystal.setAttribute("crystalValue",numberOptions[i]);

		crystals.appendChild(imageCrystal);
	   
	 }
	for(var i = 0; i < numberOptions.length; i++){

		var imageCrystal = document.getElementById("crystalball");
		imageCrystal.setAttribute("crystalValue",numberOptions[i]);

		crystals.appendChild(imageCrystal);
	}
	for(var i = 0; i < numberOptions.length; i++){

		var imageCrystal = document.getElementById("crystalgayle");
		imageCrystal.setAttribute("crystalValue", numberOptions[i]);

		crystals.appendChild(imageCrystal);
	}
	for(var i = 0; i < numberOptions.length; i++){

		var imageCrystal = document.getElementById("crystallight");
		// The getElementById() method returns the element that has the ID attribute with the specified value.
		imageCrystal.setAttribute("crystalValue", numberOptions[i]);

		crystals.appendChild(imageCrystal);
	}


	crystal-image.on("click",function(){
//when crystal-image is clicked, the function executes

	var arrayNumber=this.getAttribute('value');
	numberOptions[parseInt(arrayNumber)];
		//grabs spot in array as assigned on html and converts string to integer.  this will need to be added to counter
	
	var increment = (this).attr("crystalValue"); 
	counter += parseInt(increment);//parseInt will take a value and turn a string into an integer
	//var increment = numberOptions[numberIndex]; //set previous line to index

	alert("You have accumulated " + counter + " points!");
	

	if(counter == targetNumber){
		// need counter here to add number of wins to print at wins
		alert ("You Won!");
		numWins==numWins+1;
		console.log(targetNumber)
		
	} else if (counter > targetNumber){
		 // need a counter here to add number of losses to print for losses
			numLosses==numLosses+1;
			alert ("You Lose!")};

		document.getElementById(numWins).innerHTML = (numWins);
	document.getElementById(numLosses).innerHTML = (numLosses);	
});


