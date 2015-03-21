angular.module('appApp')
  .controller('ModalDemoCtrl', function ($rootScope,$scope, $modal, $log, $firebaseSimpleLogin) {

    var ref = new Firebase('https://gforgelato.firebaseio.com');
    $rootScope.auth = $firebaseSimpleLogin(ref);

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'views/myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      backdrop: 'static',
      keyboard: 'false',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('appApp')
  .controller('ModalInstanceCtrl', function ($rootScope,$scope, $modalInstance, items, $firebaseSimpleLogin) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.login = function () {
    
     console.log('signing in...');

      $rootScope.auth.$login('password', {
        email: $scope.username,
        password: $scope.password
      }).then(function(user) {
        console.log('user: ', user);
        $modalInstance.close();
      }, function(error) {
        console.log('error: ', error);
      });



  };

}); 