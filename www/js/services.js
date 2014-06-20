angular.module('starter.services', [])

.factory('loginFactory', [
    function($rootScope) {


        return {

        	authenticate: function(login, password){
        		if(login === 'test' && password === 'test'){
        			return {
        				id_user: 99,
        				nom: 'Jean',
        				prenom: 'Pierre',
        				civilite_id: 1,
        				login: 'jpierre'
        			}
        		}
        		else{
        			return {
        				error: "login/password incorrect"
        			}
        		}
        	}
           /* authenticate: function(login, password) {
                $http({
                    method: 'POST',
                    url: $rootScope.urlDefaultServer + 'prod' + $rootScope.urlIdentification,
                    params: {
                        login: $scope.login,
                        pwd: $scope.password
                    }
                }).
                success(function(data, status, headers, config) {
                    return data;
                }).
                error(function(data, status, headers, config) {
                    return data;
                });
            }*/

        };
    }
])

.factory('leaveFactory', [
    function() {


        return {
        	create: function(){
        		return {
        			typeBdd: 'prod',
        			demande: {
        				dateCreation: new Date(),
        				dateDebut: new Date(2014, 09, 25),
        				dateFin: new Date(2014, 10, 5),
        				collaborateur_id: 99,
        				statut: 12,
        				type_id: 0
        			}
        		}
        	},
        	update: function(){
        		return {
        			typeBdd: 'prod',
        			demande: {
        				dateCreation: new Date(),
        				dateDebut: new Date(2014, 09, 25),
        				dateFin: new Date(2014, 10, 5),
        				collaborateur_id: 99,
        				statut: 12,
        				type_id: 0
        			}
        		}
        	},
        	delete: function(){
        		return {
        		}
        	}
        };
    }
])

.factory('craFactory', [
    function() {


        return {

        };
    }
])

.factory('informationFactory', [
    function() {


        return {

        };
    }
])
