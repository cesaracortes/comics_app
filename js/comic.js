function Comic( genre , imageLocation , characters , writer, status, publishedAt ){
	this.genre = genre;
	this.location = imageLocation;
	this.characters = characters;
	this.writer = writer;
	this.status = status;
	this.publishedAt = publishedAt;


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
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/iroman01.jpg" , ["Ironman"] , "David Michelinie" , "Borrowed" , "May  2010"));;
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/iroman02.jpg" , ["Ironman"] , "David Michelinie" , "Available" , "April 2012"));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/avengers01.jpg", ["Captain America" , "Thor"] ,  "Jonathan Hickman" ,"Available" , "January 2013"));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/avengers02.jpg", ["Captain America" , "Thor"],  "Jonathan Hickman" ,"Available" , "April  2015"));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/avengers03.jpg", ["Captain America" ],  "Jonathan Hickman" ,"Borrowed" , "March  2016"));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/avengers04.jpg", ["Captain America" , "Thor","Hulk"],"Jonathan Hickman" ,"Borrowed" , "June 2015"));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/hulk.jpg", ["Hulk"], "Mark Waid" ,"Borrowed" , "April 2014"));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/spiderman01.jpg", ["Spiderman"],"Peter David" ,"Available" , "October 2015"));
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/spiderman02.jpg", ["Spiderman"] , "Peter David" ,"Available" , "Decenber 2015")); 
		Comic.comics.push(new Comic(Genre.superHeroes() , "imgs/spiderman03.jpg", ["Spiderman"] ,"Peter David" ,"Available" , "January 2016"));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/spaceMan.jpg", ["SpaceMan"],"Brian Azzarello" ,"Borrowed" , "October 2012"));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/eternauta.jpg", ["Eternauta"] , "Hctor  Oesterheld" ,"Borrowed" , "April 1957")); 	
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/eternauta02.jpg", ["Eternauta"], "Hector Oesterheld" ,"Available" , "January 1959"));
		Comic.comics.push(new Comic(Genre.anime() , "imgs/dragonBallZ01.jpg", ["Dragon Ball"] ,"Akira Toriyama" ,"Available" , "November 1990"));
		Comic.comics.push(new Comic(Genre.anime() , "imgs/dragonBallZ02.jpg", ["Dragon Ball"],"Akira Toriyama" ,"Borrowed" , "April 1993"));
		Comic.comics.push(new Comic(Genre.anime() , "imgs/dragonBallZ03.jpg", ["Dragon Ball"],"Akira Toriyama" ,"Available" , "December 1994"));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD01.jpg", ["The Walking Dead"],"Robert Kirkman" ,"Available" , "October 2003"));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD02.jpg", ["The Walking Dead"],"Robert Kirkman" ,"Borrowed" , "November 2003"));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD03.jpg", ["The Walking Dead"],"Robert Kirkman" ,"Available" , "December 2003"));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD04.jpg", ["The Walking Dead"],"Robert Kirkman" ,"Borrowed" , "March 2004"));
		Comic.comics.push(new Comic(Genre.scienceFiction() , "imgs/TWD05.jpg", ["The Walking Dead"],"Robert Kirkman" ,"Available" , "June 2004"));
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



	




