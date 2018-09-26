var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === 'gallery'){
	weapon = 'trophy'
    
} else if (room === 'ballroom'){
	weapon = 'poison'
    
} else if (room === 'billiards room'){
	weapon ='pool stick'
    } else{
	weapon = 'knife'
}
	if (room === 'dining room'){
		if (suspect === 'Mr. Parkes'){
		solved = true;
		}
	}
		else if (room === 'gallery'){
		if (suspect === 'Ms. Van Cleve'){
		solved = true;
		}
		}
		else if (room === 'billiards room'){
		if (suspect ==='Mrs. Sparr'){
		solved = true;
		}
		}
		else if(room === 'ballroom'){
		if (suspect === 'Mr. Kalehoff'){
		solved = true;
		}
}
if (solved === true){
	console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + ' !');
}