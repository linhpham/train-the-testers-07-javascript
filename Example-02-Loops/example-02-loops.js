

function isNumber(n) {
	//ref: http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric/
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function showError(element, msg) {
	element.parent().find(".error").html(msg);
}

function clearError(element) {
	element.parent().find(".error").html("");
}

var changeHandler = function () {
	var v = $(this).val();  // HERE: TALK ABOUT THIS OBJECT
	if (isNumber(v)) {
		clearError($(this));  //HERE

		var sum = 0;
		$(".dollarInput").each(function () {
			var val = $(this).val();   //HERE: TALK ABOUT THIS OBJECT
			if (val.length > 0) {
				sum += parseFloat($(this).val());
			}
		});

		$(".totalAmount").html(sum);
	} else {
		//validation error
		showError($(this), "Enter a valid number.");
		//$(".totalAmount").html("--");  //HERE
	}
};



/*var changeHandler = function () {
	var sum = 0;

	$(".dollarInput").each(function () {
		var val = $(this).val();
		// alert("value: " + val);  //HERE
		console.log("value: " + val);  //HERE
		if (val.length > 0) {
			sum += parseFloat($(this).val());
		}
	});

	$(".totalAmount").html(sum);
};*/


$(document).ready(function() {
	$(".dollarInput").on("keyup", changeHandler);
});