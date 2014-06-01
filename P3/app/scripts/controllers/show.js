'use strict';

angular.module('p3App')
  .controller('ShowCtrl', function ($scope, $routeParams, marvelService, $location) {
    
    $scope.model = {
    	character: 	[],
    	urlImage: 	"",
    	comics: 	[],
    	series: 	[],
    	stories: 	[],
    	events: 	[]
    };

    var id = $routeParams.id;

    marvelService.getCharacter(id)
    .success(function(response){
        var data = response.data.results[0];
        
        $scope.model.character  = data;

        $scope.model.comics     = data.comics;
        $scope.model.events     = data.events;
        $scope.model.series     = data.series;
        $scope.model.stories    = data.stories;    

        if (data.thumbnail != null) {
            $scope.model.urlImage   = data.thumbnail.path + "." + data.thumbnail.extension;    
        } else {
            $scope.model.urlImage   = "http://resourceworld.com/wp-content/themes/channelpro/images/default-thumb.gif";
        }
        
    });

    $scope.swipeLeftAction = function() {
        $location.path("/");
    };
  });
