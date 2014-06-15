'use strict';

angular.module('p4App')
	.controller('LoginCtrl', function ($scope){
		
		$scope.model = {
			userName1: "",
			userName2: "",
			gameType: "1P"
		};

		$scope.play = function () {
			saveUser();

		};

		$scope.isPlayDisabled = function() {					
			var isDisabled = true;

			if ($scope.model.gameType == "2P") {				
				if ($scope.model.userName1 != "" && $scope.model.userName2 != "")
					isDisabled = false;
			} else {
				if ($scope.model.userName1 != "")
					isDisabled = false;
			}

			return isDisabled;
		};

		// Private Methods
		function saveUser() {
			if ($scope.model.userName2 == "") $scope.model.userName2 = "CPU";
			sessionStorage.setItem("model", JSON.stringify($scope.model));
		}



	});