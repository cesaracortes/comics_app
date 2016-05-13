	function addItem(aComic){
		var item = document.createElement("li");
		var fig = document.createElement("figure");
		fig.innerHTML = "<img onclick=\"showImageDetalis()\" src=\"" + aComic.location + "\">" ;
		addDesciptionToItem(item,aComic);
		item.appendChild(fig);
		return item;
		}

	function addDir(aFileName){
		var dir = "imgs/";
		return dir + aFileName;
	}

	function addDesciptionToItem(item,aComic){
		var details = document.createElement("div");
		details.className = "details";
		
		var autorLabel = document.createElement("label");
		autorLabel.innerHTML = "Autor: " + aComic.writer;
		details.appendChild(autorLabel);

		
		var statusLabel = document.createElement("label");
		statusLabel.innerHTML = "Status: " + aComic.status;
		details.appendChild(statusLabel);

		var publishedLabel = document.createElement("label");
		publishedLabel.innerHTML = "Published: " + aComic.publishedAt;
		details.appendChild(publishedLabel);
		item.appendChild(details);
	}



	function init(){
		loged_usr.text = "Welcome " + logedUser().name;
		loadBanner();
		var comics = document.getElementById("comics");
		var list = document.createElement("ul");
		comics.appendChild(list);
		drawComics(findComics());
		loadGenderSelection();
		loadCharacterSelection();
	}

	function loadBanner(){
		var images = ["imgs/bat-sup.jpg","imgs/civilwarbanner.jpg" , "imgs/header02.jpg"];
		var header = document.getElementsByTagName("header")[0];
		var i = 0;
		function changeBackgroundImage() {
			header.style.backgroundImage = "url("+ images[i] +")";
  		      i++;
  		      if(i == images.length){
  		      	i = 0;
  		      }
  		}
	    setInterval(changeBackgroundImage, 5000);
	}
	

	function loadGenderSelection(){
		 var gender_selection = document.getElementById("genre_selection");
		 var genders = Genre.all();
		 for (var i = 0; i < genders.length ; i++) {
		 	var gender = document.createElement("option");
		 	 gender.textContent = genders[i];
    	 	 gender_selection.appendChild(gender);	
		 }
	}

	function loadCharacterSelection(){
		 var characters_selection = document.getElementById("character_selection");
		 var characters = Character.all();
		 for (var i = 0; i < characters.length ; i++) {
		 	var character = document.createElement("option");
		 	character.textContent = characters[i].name;
		 	characters_selection.appendChild(character);	
		 }
	}

	function findComics(){
		return Comic.all();
	}

	function findByGenre(){
		var filteredComics = filterComics(filterByGenre);
		drawComics(filteredComics);
	}

	function drawComics(someComics){
		items = someComics.map(addItem);
		addComics(items);
	}

	function addComics(items){
		var list = document.getElementsByTagName("ul")[0];
		while (list.firstChild) {
   			 list.removeChild(list.firstChild);
   		}
		items.forEach(function (anItem){
			list.appendChild(anItem);
		});
	}

	function filterComics(filter){
		return findComics().filter(filter);
	}

	function filterByGenre(aComic){
		var genre_selection = document.getElementById("genre_selection");
		var genre = genre_selection.options[genre_selection.selectedIndex].value;
		return aComic.isGenre(genre);
	}

	function filterByCharacter(aComic){
		var character_selection = document.getElementById("character_selection");
		var aCharacter = character_selection.options[character_selection.selectedIndex].value;
		return aComic.hasCharacter(aCharacter);
	}

	function findByCharacter(){
		var filteredComics = filterComics(filterByCharacter);
		drawComics(filteredComics);
	}

	function clearSearch(){
		var filteredComics = Comic.all();
		drawComics(filteredComics);

	}

	function log_out(){
		localStorage.removeItem("logedUser");
		window.location = "init.html";
	}

	function validatelogedUsr(){

	}

	function logedUser(){
		return JSON.parse(localStorage["logedUser"])
	}

	function showProfile(){
		var modal = document.getElementById('userProfile');
		modal.style.display = "block";
		var user = logedUser();
		info_name.innerHTML = user.name + " "  + user.lastName ;
		info_user_name.innerHTML = user.user_name;
		info_email.innerHTML = user.email;
		info_perfil.innerHTML =user.perfil;

    	window.onclick = function(event) {
   		 	if (event.target == modal) {
      	 		 modal.style.display = "none";
   			 }
   		}

	}

	function doAdvancedSearch(){
		var valueToSearch = document.getElementById("advancedSearch").value;
		var someComics = Comic.findByAnyMatch(valueToSearch);
		drawComics(someComics);
	}

	