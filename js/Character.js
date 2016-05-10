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
		Character.characters.push(new Character("SpaceMan"));
		Character.characters.push(new Character("Eternauta"));
		Character.characters.push(new Character("Dragon Ball"));
		Character.characters.push(new Character("The Walking Dead"));
		
	}
	return Character.characters;
}




