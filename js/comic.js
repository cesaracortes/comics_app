function Comic( genre , imageLocation , characters ){
	this.genre = genre;
	this.location = imageLocation;
	this.characters = characters;

	this.hasCharacter = function (aCharacter){
		return this.characters.some(function (anotherCharacter){
					return anotherCharacter == aCharacter;
					});
	}

	this.isGenre = function (aGenre){
		return genre == aGenre;
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
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/spaceMan.jpg", ["SpaceMan"]));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/eternauta.jpg", ["Eternauta"]));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/eternauta02.jpg", ["Eternauta"]));
		Comic.comics.push(new Comic(Genre.anime() , "imgs/dragonBallZ01.jpg", ["Dragon Ball"]));
		Comic.comics.push(new Comic(Genre.anime() , "imgs/dragonBallZ02.jpg", ["Dragon Ball"]));
		Comic.comics.push(new Comic(Genre.anime() , "imgs/dragonBallZ03.jpg", ["Dragon Ball"]));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD01.jpg", ["The Walking Dead"]));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD02.jpg", ["The Walking Dead"]));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD03.jpg", ["The Walking Dead"]));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD04.jpg", ["The Walking Dead"]));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD05.jpg", ["The Walking Dead"]));
	}
	return Comic.comics;
}


Comic.findByAnyMatch = function(aValue){
			aFilter = Filter.or(aGenreFilter(aValue),aCharacterFilter(aValue));
			return Comic.all().filter(aFilter);
}

function aGenreFilter(aValue){
	var value = aValue;
	return function(aComic){
		return aComic.genre.toLowerCase().includes(aValue.toLowerCase());	
	}
	
}

function aCharacterFilter(aValue){
	var value = aValue;
	return function(aComic){
		 return aComic.characters.some( function(aCharacter){
											return aCharacter.toLowerCase().includes(aValue.toLowerCase());
										});	
	}
	
}



	




