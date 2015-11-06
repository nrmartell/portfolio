// (function() {
// 	var app = angular.module('MyPortfolio', [ 'ui.router', 'ui.bootstrap']);
// $scope.items = ['recordkeeper', 'guestadvisor', 'project4', 'project5'];

//   $scope.animationsEnabled = true;

//   $scope.open = function (size) {

//     var modalInstance = $uibModal.open({
//       animation: $scope.animationsEnabled,
//       templateUrl: '_projectView.html',
//       controller: 'modalCtrl',
//       size: size,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });

//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };

//   $scope.toggleAnimation = function () {
//     $scope.animationsEnabled = !$scope.animationsEnabled;
//   };

// });

// // Please note that $modalInstance represents a modal window (instance) dependency.
// // It is not the same as the $uibModal service used above.

// angular.module('MyPortfolio').controller('modalCtrl', function ($scope, $uibModalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.ok = function () {
//     $uibModalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });


