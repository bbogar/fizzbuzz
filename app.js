function fizzBuzz(a){
	for (var i = 1; i <= a; i++){
		if(i % 3 === 0 && i % 5 === 0){
			$("body").append(" fizz buzz, ");
		} else if(i % 3 === 0){
			$("body").append(" fizz, ");
		} else if (i % 5 === 0){
			$("body").append(" buzz, ");
		} else {
			$("body").append(i + ", ");
		}
	}
}

function userPrompt(){
	var fizzNum = +prompt("Feed me a number!");
	if (isNaN(fizzNum) || $.trim(fizzNum) == " "){
		userPrompt();
	} else {
		fizzBuzz(fizzNum);
	}
}

$(document).ready(function(){
	userPrompt();
	$("body").append(fizzBuzz(fizzNum));
})