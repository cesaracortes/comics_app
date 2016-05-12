function Filter(aFilter, anotherFilter){
	this.aFilter = aFilter;
	this.anotherFilter = anotherFilter;
}

Filter.or = function( aFilter, anotherFilter){
		return function(aValue){
			return aFilter(aValue) || anotherFilter(aValue);
		}
}