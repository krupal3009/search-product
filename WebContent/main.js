var myApp=angular.module("myApp",[]);
myApp.controller("mainctrl",function($scope,$http){
	
	$scope.search="";
	$scope.contacts=[];
	$http.get("MOCK_DATA.json").then(function(resp){
			$scope.contacts=resp.data;
			});

		
});