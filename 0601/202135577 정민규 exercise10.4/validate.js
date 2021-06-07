function validateEmail(address) {
    var rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var res = rex.test(address);
	console.log(address + " -> " + res);
	return res;
}

function validatePhone(phone) {
	var rex = /^([0-9]{3})[-]?([0-9]{3,4})[-]?([0-9]{4})$/;
	var res = rex.test(phone);
	console.log(phone + " -> " + res);
	return res;
}
