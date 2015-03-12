'use strict';

angular.module('appApp')
  .controller('HistoryCtrl', function ($scope, $firebase) {
    var history = new Firebase('https//gforgelato.firebaseio.com/History');
  	$scope.history = $firebase(history);
  	$scope.deleteHistory = function(key, order){
  		$scope.history.$remove(key);
  	};
  });
