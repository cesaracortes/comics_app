function log_in(){
	user = userFromInput();
	if (wasRegistered(user)){
		alert("bienvenido " + user_name.value);
		window.location = "main.html";
	}else{
		alert("invalid user or password ");
	}
}

function userFromInput(){
	var user =  new User(user_name.value , pass.value);
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

function wasRegistered(user){
	var users =  usersFromJSON();
	return  retrieveUserFrom(users);
}

function sign_in(){
	document.getElementById("log_in").style.display = "none";
	document.getElementById("sign_in").style.display = "inline-block";	
}

function register(){
	if(validateUser()){
		do_register();
	}
}

function do_register(){
	var user = {user_name:new_name.value, password: new_pass.value}; 
	var registerd_users = usersFromJSON();
	registerd_users.push(user);
	localStorage["users"] = JSON.stringify(registerd_users);
}

function validateUser(){
	return userNotExists() && isPassValid();
}

function userNotExists(){
	return usersFromJSON.some(function(aValue){
		return aValue.user_name == new_user.value;
	});
	}

function isPassValid(){
	var pass = new_pass.value;
	var pattern = new RegExp("[a-zA-Z0-9]");
    return pass.length > 6 && pattern.test();
}

function init(){
	if(localStorage["users"] == undefined){
		var admin = [new User("admin","admin2016")]; 
		localStorage["users"] = JSON.stringify(admin);	
	}
}

