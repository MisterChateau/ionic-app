angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $state) {

    $scope.disconnect = function($scope){
        localStorage.removeItem('authenticated');
        //$rootScope.isAuthenticated = false;
        $state.go('app.login');
    }
})

.controller('LoginCtrl', function($scope, $rootScope, loginFactory, $state, $ionicSideMenuDelegate) {

    //disable drag content to access menu
    $ionicSideMenuDelegate.canDragContent(false);

    //problem with the binding in the form... passed parameters inside the directive
    $scope.authenticate = function(login, password) {
        var response = loginFactory.authenticate(login, password);
        if (response.error) {
            console.log(response);
        }
        else{
            localStorage.setItem('authenticated', JSON.stringify(response));
            //$rootScope.isAuthenticated = true;
            $state.go('app.welcome');
        }
    }

})

.controller('WelcomeCtrl', function($scope, $http) {})

.controller('CraCtrl', function($scope, $http) {})

.controller('LeaveCtrl', function($scope, $http, $ionicModal) {

    $scope.newLeave = {};

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('new-leave.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('edit-leave.html', function($ionicModal) {
        $scope.editModal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });

    //get selected event ng-repeat's $index to bind the data with the edit modal
    $scope.initEdit = function(index) {
        //get index of object to edit in list
        $scope.eventIndex = index;
        //get current data in case of cancel
        $scope.previousData = {
            type: $scope.events[index].type,
            creation_date: $scope.events[index].creation_date,
            start_date: $scope.events[index].start_date,
            after_noon: $scope.events[index].after_noon,
            end_date: $scope.events[index].end_date,
            until_noon: $scope.events[index].until_noon,
            state: $scope.events[index].state
        };
    }

    $scope.cancelEdit = function() {
        console.log($scope.previousData, $scope.events[$scope.eventIndex]);
        $scope.events[$scope.eventIndex] = $scope.previousData;
        $scope.editModal.hide();
    }

    $scope.deleteEvent = function(index) {
        $scope.events.splice(index, 1);
        $scope.editModal.hide();
    }

    $scope.addLeave = function() {

        console.log($scope.newLeave);

        $scope.events.unshift({
            type: $scope.newLeave.type,
            creation_date: new Date(),
            start_date: $scope.newLeave.start_date,
            after_noon: $scope.newLeave.after_noon,
            end_date: $scope.newLeave.end_date,
            until_noon: $scope.newLeave.until_noon,
            state: 'non validé'
        });
        //close modal when validate
        console.log($scope.events);
        //reset form values
        $scope.newLeave.type = '';
        $scope.newLeave.start_date = '';
        $scope.newLeave.end_date = '';
        $scope.newLeave.until_noon = 'false';
        $scope.newLeave.after_noon = 'false';

        $scope.modal.hide();
    }
    //bouchon
    $scope.events = [{
        type: 'RTT',
        creation_date: new Date(),
        start_date: new Date(2014, 07, 8),
        after_noon: false,
        end_date: new Date(2014, 08, 8),
        until_noon: false,
        state: 'validé'
    }]

})

.controller('NewsCtrl', function($scope, $http) {

})

.controller('TweetsCtrl', function($scope, $http) {})

.controller('AboutCtrl', function($scope) {})
