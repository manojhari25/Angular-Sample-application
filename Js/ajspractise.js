// var app = angular.module("myfirst", []);
// app.controller("myFirst", function($scope) {
//     $scope.firstName = "manoj";
//     $scope.lastName = "hari";
//     $scope.changename=function(){
//     	$scope.firstName="hari";
//     	$scope.changeName=function(){
//     		$scope.lastName="manoj";
//     	}
//     }
// });
//     $scope.names=['hari','manoj','raju'];
// });

//
//
var app = angular.module("myfirst", []);
app.controller("myFirst", function($scope,$http) {
	$scope.welcome={};
	// var url="ajs.htm";
	$http.get("ajs.htm")
	.success(function(result){
		$scope.welcome=result;

	})
})

//
// var app = angular.module('myfirst', []);
// app.controller('myFirst', function($scope, $http) {
//     $http.get("ajs.htm")
//         .then(function (response) {
//             $scope.content = response.data;
//             $scope.status = response.status;
//             $scope.statusText = response.statusText;
//         })
// })
//
// var app = angular.module('myfirst', []);
// app.controller('myFirst', function($scope, $interval) {
//     $scope.date=new Date().toLocaleTimeString();
//     $interval(function () {
//         $scope.date=new Date().toLocaleTimeString();
//
//     },1000);
//
// });
// var app = angular.module('myfirst', []);
// app.controller('myFirst', function($scope, $timeout) {
//   $scope.date="manoj";
//   $timeout(function () {
//       $scope.date = "hari";
//   },1000);
//
//   })

// var app = angular.module('myfirst', []);
// app.controller('myFirst', function($scope, $http) {
//     $http.get("ajs.htm")
//         .then(function (response) {
//             $scope.names=response.data.records;
//
//         })
// })
// var app = angular.module('myfirst', []);
// app.controller('myFirst', function($scope) {
//
//         $scope.cars = {
//         car01 : {brand : "Ford", model : "Mustang", color : "red"},
//         car02 : {brand : "Fiat", model : "500", color : "white"},
//         car03 : {brand : "Volvo", model : "XC90", color : "black"}
//     }
//
//
// })