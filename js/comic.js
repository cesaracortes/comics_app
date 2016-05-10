function Comic( genre , imageLocation , characters ){
	this.genre = genre;
	this.location = imageLocation;
	this.characters = characters;

	this.hasCharacter = function (aCharacter){
		return this.characters.some(function (anotherCharacter){
					return anotherCharacter == aCharacter;
					});
	}
}

Comic.comics = [];

Comic.all = function(){
	if ( Comic.comics.length == 0 ){
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/iroman01.jpg" , ["Ironman"]));;
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/iroman02.jpg" , ["Ironman"]));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/avengers01.jpg", ["Captain America" , "Thor"]));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/avengers02.jpg", ["Captain America" , "Thor"]));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/avengers03.jpg", ["Captain America" ]));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/avengers04.jpg", ["Captain America" , "Thor","Hulk"]));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/hulk.jpg", ["Hulk"]));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/spiderman01.jpg", ["Spiderman"]));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/spiderman02.jpg", ["Spiderman"]));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/spiderman03.jpg", ["Spiderman"]));
	}
	return Comic.comics;
}



	

