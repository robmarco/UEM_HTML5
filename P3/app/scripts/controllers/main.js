'use strict';

angular.module('p3App')
  .controller('MainCtrl', function ($scope, marvelService) {
 	var limit = 20;

 	if (sessionStorage.getItem("model") == null) { 		
 		// Initialize scope
 		$scope.model = {
	 		characters: [],
	 		offset: 0,
	 		total: 0
 		};

 		// Load all characters from marvelService
 		loadCharacters(20, 0);	 	
 	} else {
 		$scope.model = JSON.parse(sessionStorage.getItem("model"));
 	} 	

 	$scope.showMore = function() {
 		$scope.model.offset += 20;
 		loadCharacters(limit, $scope.model.offset);
 	}

 	// Private Methods
 	function loadCharacters (limit, offset) {
 		marvelService.getCharacters(limit, offset)
 		.success(function(response){
 			$scope.model.characters = $scope.model.characters.concat(response.data.results);			
			$scope.model.total 	= response.data.total;

			sessionStorage.setItem("model", JSON.stringify($scope.model));
 		});	
 	}

 	function imagePath (id) {
 		var char = _.where($scope.model.characters, { id: id }); 		
 		return (char.thumbnail != null ? 1 : 0);
 	}
 	

  });
