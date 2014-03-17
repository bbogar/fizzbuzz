function fizzBuzz(){
	for (var num = 1; num <= 100; num++){
		if(num % 3 === 0 && num % 5 === 0){
			$("body").append(" fizz buzz ");
		} else if(num % 3 === 0){
			$("body").append(" fizz ");
		} else if (num % 5 === 0){
			$("body").append(" buzz ");
		} else {
			$("body").append(num + " ");
		}
	}
}

$(document).ready(function(){
	$("body").append(fizzBuzz);
})