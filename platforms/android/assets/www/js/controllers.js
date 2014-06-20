angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope, $http){
})

.controller('WelcomeCtrl', function($scope, $http){
})

.controller('CraCtrl', function($scope, $http){
})

.controller('LeaveCtrl', function($scope, $http, $ionicModal){

	// Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('new-leave.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });

    $scope.addLeave = function(){

    	$scope.events.unshift(
    		{
    			type: $scope.modaltype,
    			start_date: $scope.modal.start_date,
    			end_date: $scope.modal.end_date,
    			state: 'non validé'
    		}
    	);
    	//close modal when validate
    	console.log($scope.modal.start_date);
    	$scope.modal.hide();
    }

	$scope.events = [
		{
			type: 'rtt',
			creation_date: new Date(),
			start_date: new Date(2014, 07, 10),
			end_date: new Date(2014, 08, 10),
			state: 'non validé'
		}
	]

})