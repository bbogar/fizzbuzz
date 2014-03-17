//$(document).ready(function(){


//var num = 1;
function fizzBuzz(){
	for (var num = 1; num <= 100; num++){
		if(num % 3 === 0 && num % 5 === 0){
			console.log("fizz buzz");
		} else if(num % 3 === 0){
			console.log("fizz");
		} else if (num % 5 === 0){
			console.log("buzz");
		} else {
			console.log(num);
		}
	}
}

//})