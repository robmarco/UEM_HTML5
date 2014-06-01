'use strict';

angular.module('p3App')
  .service('marvelService', function marvelService($http) {

  	function getChars(limit, offset) {
  		
 		return $http.get("http://gateway.marvel.com:80/v1/public/characters?" 
 			+ "limit=" + limit + "&offset=" + offset + "&apikey=cf3e52f8f6e341ff13cc2a2eaddd8fe2");
  	}

  	function getChar (id) {
     	return $http.get("http://gateway.marvel.com:80/v1/public/characters/"+ id
   		  	+"?apikey=cf3e52f8f6e341ff13cc2a2eaddd8fe2");
  	}

  	return {
  		getCharacter: getChar,
  		getCharacters: getChars
  	}
  });
