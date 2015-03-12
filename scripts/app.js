'use strict';

angular.module('appApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'naif.base64'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MainCtrl'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'MainCtrl'
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .otherwise({
        redirectTo: '/about'
      });
  })

 .run(function($rootScope, $location, $http) {
  // Here be global functions and variables
  $rootScope.$on('$routeChangeSuccess', function () {
    $rootScope.myPage = $location.path().substring($location.path().indexOf('/', 1)).replace('/','');
  });
});
