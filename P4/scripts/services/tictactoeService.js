angular.module("p4App")
    .factory("tictactoeService", function($rootScope){

        var fac = {};

        /* ============= Private Methods and vars */
        var newBoard = function() {
            return [null, null, null,
                    null, null, null,
                    null, null, null];
        };

        var board = newBoard();

        var isWinnerLane = function(positions) {
            return  fac.markAt(positions[0]) != null &&
                    fac.markAt(positions[0]) == fac.markAt(positions[1]) &&
                    fac.markAt(positions[1]) == fac.markAt(positions[2])                
        }

        /* ============= Factory Methods */
        fac.newGame = function() {
            board = newBoard();
        };

        fac.markAt = function(position) {
            return board[position - 1];

        };

        fac.playAt = function(player, position) {
            if (fac.markAt(position) == null)
                board[position-1] = player;
        };

        fac.isWinner = function() {

            var winnerMovements = [
                [1, 2, 3], [4, 5, 6], 
                [7, 8, 9], [1, 4, 7], 
                [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]];

            for (var i=0; i<winnerMovements.length; i++) {
                if (isWinnerLane(winnerMovements[i])) {
                    return true;
                }                
            }

            return false;
        };

        fac.cpuMove = function() {
            var possibleCPUMovements = [];

            for (var i=1; i<10; i++) {
                if (fac.markAt(i) == null)
                    possibleCPUMovements.push(i); 
            }
            
            var randomPosition = Math.floor((Math.random() * possibleCPUMovements.length));
            fac.playAt("player2", possibleCPUMovements[randomPosition]);

        }

        return fac;



    });
