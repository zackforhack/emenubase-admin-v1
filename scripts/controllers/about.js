'use strict';

angular.module('appApp')
  .controller('AboutCtrl', function ($scope, $firebase) {
    var about = new Firebase('https//gforgelato.firebaseio.com/About');

    $scope.about = $firebase(about);

    
  	$scope.updateProfile = function(key,profile){
        

            var newAbout = {
                'Address': profile.Address,
                'Name': profile.Name,
                'Telephone': profile.Telephone,
                'Hours': profile.Hours,
                'Companyinfo': profile.Companyinfo,
                'Foodquality': profile.Foodquality
            };

        $scope.about.$add(angular.fromJson(angular.toJson(newAbout)));
  		$scope.about.$remove(key);
  


  	};
  });
