'use strict';

angular.module('p4App')
	.controller('PlayCtrl', function ($scope, tictactoeService, $location){

        $scope.currentTurn = "player1";
        $scope.winner = null;
        
        $scope.model = {
            userName1: null,
            userName2: null,
            gameType: null
        };

        if (sessionStorage.getItem('model') != null) {
            $scope.model = JSON.parse(sessionStorage.getItem('model'));
        } else {
            $location.path('/');
        }

        $scope.newGame = function() {
            tictactoeService.newGame();
            $scope.currentTurn = "player1";
            $scope.winner = null;
        };

        $scope.play = function(position) {            
            if (tictactoeService.markAt(position) == null) {
                playAt($scope.currentTurn, position);
            }
        };

        $scope.markAt = function(position) {
            return tictactoeService.markAt(position);
        };

        /* ================= Private Methods */
        var playAt = function(player, position) {
            if ($scope.winner == null) {
                // First Player Move
                tictactoeService.playAt(player, position);                
                checkWinner(player);

                // If GameType = 1P. CPU Move
                if ($scope.model.gameType == "1P" &&
                    $scope.winner == null) {
                    tictactoeService.cpuMove();
                    checkWinner("player2");
                } 

                if ($scope.model.gameType == "2P")
                    changeTurn();                
                
            }
        };

        var changeTurn = function() {
            $scope.currentTurn = ($scope.currentTurn == "player1" ? "player2" : "player1");
        };

        var checkWinner = function(player) {
            if (tictactoeService.isWinner()) {
                if (player == "player1") {
                    $scope.winner = $scope.model.userName1;    
                } else {
                    $scope.winner = $scope.model.userName2;
                }
            }
        };

	});