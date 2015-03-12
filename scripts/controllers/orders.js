'use strict';

angular.module('appApp')
  .controller('OrdersCtrl', function ($scope, $firebase) {
  	var orders = new Firebase('https://gforgelato.firebaseio.com/Orders');
    $scope.orders = $firebase(orders);
    
    var history = new Firebase('https//gforgelato.firebaseio.com/History');
  	$scope.history = $firebase(history);
  	$scope.confirmOrder = function(key, order){
  		order.confirmed = true;
  		// var currentOrder = $scope.orders.$child(key);
  		$scope.orders.$save(key);
  	};
  	$scope.deleteOrder = function(key, order){
        $scope.history.$add(angular.fromJson(angular.toJson(order)));
  		$scope.orders.$remove(key);
  	};
  });
