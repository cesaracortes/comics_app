
	function addItem(aComicName){
		var item = document.createElement("li");
		var fig = document.createElement("figure");
		//var img = document.createElement("img");
		fig.innerHTML = "<img src=\"" + aComicName + "\">"
		item.appendChild(fig);

		return item;
		}

	function addDir(aFileName){
		var dir = "imgs/";
		return dir + aFileName;
	}

	function imageFiles(){
		var files = ["iroman01.jpg" ,"iroman02.jpg" ,"avengers01.jpg","avengers02.jpg", "avengers03.jpg", "avengers04.jpg","gurdians.jpg" , "hulk.jpg", "spiderman01.jpg" , "spiderman02.jpg" ,"spiderman03.jpg" ,"ghost_rider.jpg" , "daredevil.jpg" , "captainAmerica.jpg", "thor.jpg" , "xmen.jpg"];
		return files.map(addDir);
	}

	function init(){
		var comics = document.getElementById("comics");
		var list = document.createElement("ul");
		comics.appendChild(list);
		
		var items = imageFiles().map(addItem);
		items.forEach(function (anItem){
			list.appendChild(anItem);
		});
	}
	
