function Genre  (){


}

Genre.all = function (){
	return [Genre.scienceFiction() , Genre.anime() , Genre.vintage() , Genre.superHeroes()];
}

Genre.anime = function (){
	return "Anime";
}

Genre.scienceFiction = function (){
	return "Science fiction";
}


Genre.superHeroes = function (){
	return "Super Heroes";
}

Genre.vintage = function (){
	return "Vintage";
}