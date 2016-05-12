

function log_in(){
	user = retrieveUser(userFromInput());
	if (user != undefined){
		localStorage["logedUser"] = JSON.stringify(user);
		window.location = "main.html";
	}else{
		alert("invalid user or password ");
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
}

function register(){
	if(validInput() && validateUser()){
		do_register();
		window.location = "main.html";
	}else{
		var sign_in = document.getElementById("sign_in");
		var errors = sign_in.getElementsByClassName("errors")[0];
		errors.style.display = "block";

	}
}

function do_register(){
	var user = {user_name:new_user_name.value, password: new_pass.value , name: new_name.value ,email: new_e_mail.value, last_name: new_last_name.value , perfil:"Normal User"}; 
	var registerd_users = usersFromJSON();
	registerd_users.push(user);
	localStorage["users"] = JSON.stringify(registerd_users);
	localStorage["logedUser"] = JSON.stringify(user);
}

function validateUser(){
	return !userExists() && isPassValid();
}

function validInput(){
	var requiredInputs = [new_name,new_last_name,new_user_name,new_pass,new_e_mail];
	var invalidInputs = requiredInputs.filter(function (anInput){
			return anInput.value == "";
			});
	for (var i = 0; i < invalidInputs.length; i++) {
		invalidInputs[i].style.border = "2px solid red";
	}
	return invalidInputs.length >= 0; 
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
		var admin = [{user_name:"admin", password: "admin2016" , perfil:"Administrador"}]; 
		localStorage["users"] = JSON.stringify(admin);	
	}
}

function cancel(){
	document.getElementById("log_in").style.display = "inline-block";
	document.getElementById("sign_in").style.display = "none";
	var x = document.getElementById("sign_in");
	var y = x.getElementsByTagName("input");
	for (var i = 0; i < y.length; i++) {
		y[i].style.border = "1px solid #ccc";
	}
	x.getElementsByClassName("errors")[0].style.display = "none";

}

