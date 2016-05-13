

function log_in(){
	user = retrieveUser(userFromInput());
	if (user != undefined){
		localStorage["logedUser"] = JSON.stringify(user);
		window.location = "main.html";
	}else{
		var sign_in = document.getElementById("log_in");
		var errors = sign_in.getElementsByClassName("errors")[0];
		errors.style.display = "block";

	}
}

function userFromInput(){
	var user = {user_name: user_name.value , password: pass.value};
	return user;
}

function hasSamePass(){
	var users =  localStorage["users"];
	return users != undefined  && hasUser(users);
}

function retrieveUserFrom(users){
	return users.find(hasSameUserName);
}


function hasUser(users){
	return users.some(hasSameUserName);
}

function hasSameUserName(user){
	return userFromInput().user_name == user.user_name && userFromInput().password == user.password;
}

function usersFromJSON(){
	var users =  localStorage["users"];
 	return JSON.parse(users);
}

function retrieveUser(user){
	var users =  usersFromJSON();
	return  retrieveUserFrom(users);
}

function sign_in(){
	document.getElementById("log_in").style.display = "none";
	document.getElementById("sign_in").style.display = "inline-block";
	var x = document.getElementById("log_in");
	var y = x.getElementsByTagName("input");
	x.getElementsByClassName("errors")[0].style.display = "none";	
}

function register(){
	if(validInputs() && validateUser()){
		do_register();
		window.location = "main.html";
	}else{
		var sign_in = document.getElementById("sign_in");
		var errors = sign_in.getElementsByClassName("errors")[0];
		errors.style.display = "block";


	}
}

function do_register(){
	var user = {user_name:new_user_name.value, password: new_pass.value , 
		name: new_name.value ,email: new_e_mail.value, last_name: new_last_name.value , perfil: id_perfil.value  }; 
	var registerd_users = usersFromJSON();
	registerd_users.push(user);
	localStorage["users"] = JSON.stringify(registerd_users);
	localStorage["logedUser"] = JSON.stringify(user);
}

function validateUser(){
	return !userExists() && isPassValid();
}

function validInputs(){
	var requiredInputs = getRequiredInputs();
	var invalidInputs = requiredInputs.filter(function (anInput){
			return anInput.value == "";
			});
	for (var i = 0; i < invalidInputs.length; i++) {
		invalidInputs[i].style.border = "2px solid red";
	}
	return invalidInputs.length == 0; 
}

function userExists(){
	return usersFromJSON().some(function(aValue){
		return aValue.user_name == new_user_name.value;
	});
	}

function isPassValid(){
	var pass = new_pass.value;
	var pattern = new RegExp("[a-zA-Z0-9]");
    return pass.length > 6 && pattern.test();
}

function init(){
	if(localStorage["users"] == undefined){
		localStorage["users"] = JSON.stringify([]);	
	}
}

function cancel(){
	document.getElementById("log_in").style.display = "inline-block";
	document.getElementById("sign_in").style.display = "none";
	var requiredInputs = getRequiredInputs();
	for (var i = 0; i < requiredInputs.length; i++) {
		requiredInputs[i].style.border = "1px solid #ccc";
	}
	document.getElementById("sign_in").getElementsByClassName("errors")[0].style.display = "none";

}

function getRequiredInputs(){
	return [new_name,new_last_name,new_user_name,new_pass,new_e_mail,id_perfil];
	 
}

function clearIfNecessary(){
	var requiredInputs = getRequiredInputs();
	var validInputs = requiredInputs.filter(function (anInput){
			return anInput.value != "";
			});
	for (var i = 0; i < validInputs.length; i++) {
		validInputs[i].style.border = "1px solid #ccc";
	}

}




