	function addItem(aComic){
		var item = document.createElement("li");
		var fig = document.createElement("figure");
		fig.innerHTML = "<img src=\"" + aComic.location + "\">"
		item.appendChild(fig);

		return item;
		}

	function addDir(aFileName){
		var dir = "imgs/";
		return dir + aFileName;
	}



	function init(){
		validatelogedUsr();
		var comics = document.getElementById("comics");
		var list = document.createElement("ul");
		comics.appendChild(list);
		var items = findComics().map(addItem);
		items.forEach(function (anItem){
			list.appendChild(anItem);
		});
		loadGenderSelection();
		loadCharacterSelection();
	}
	

	function loadGenderSelection(){
		 var gender_selection = document.getElementById("genre_selection");
		 var genders = Genre.all()
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
		if(localStorage["logedUser"] == undefined){
			window.location = "init.html";
		}else{
			loged_usr.text = "Welcome " +  JSON.parse(localStorage["logedUser"]);
		}
	}
