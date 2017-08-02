//CREAR MODULO
var tareasMod = angular.module('tareasApp', []);
//ASIGNAR CONTROLADOR
tareasMod.controller('mainController', function($scope, $http){
	//DEFINO FUNCIONES DEL CONTROLADOR
	$scope.cargarTareas = function(){
		$http.get("/tareas").success(function(data){
			console.log(data);
		}).error(function(data){
			console.log("Error:" + data);
		});
	};
	$scope.cargarTareas();
});
