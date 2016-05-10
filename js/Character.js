function Character ( named ){
	this.name = named;	
}

Character.characters = [];

Character.all = function (){
	if(Character.characters.length == 0){
		Character.characters.push(new Character("Ironman"));
		Character.characters.push(new Character("Captain America"));
		Character.characters.push(new Character("Thor"));
		Character.characters.push(new Character("Spiderman"));
		Character.characters.push(new Character("Batman"));
	}
	return Character.characters;
}


