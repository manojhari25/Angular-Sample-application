/**
 * Created by Manoj on 2/6/2017.
 */
var app = angular.module("myfirst", ["ngRoute"]);
app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider.
        when("/product",{
            "templateUrl":"product.html",
            "caseInsensitiveMatch":true
    }).
        when("/forgotpwd",{
        "templateUrl":"forgotpwd.html",
        "caseInsensitiveMatch":true
    }).
    //     when("/Manoj",{
    //         "templateUrl":"https://harimanoj1993.wixsite.com/manojhari"
    // }).
        when("/imagef",{
            "templateUrl":"imagef.html"
    }).
        otherwise({
        "templateUrl":"login.html",
        "caseInsensitiveMatch":true
    })
}])

app.controller("myFirst", function($scope,$location) {
$scope.showProductpage=function () {
    $location.url("/product");
}
$scope.showpage=function () {
    $location.url("/login");
}
$scope.showForgotpwd=function () {
    $location.url("/forgotpwd");

}
$scope.create=function () {
        $location.url("/login");
    }
    $scope.link=function () {
        if ($scope.a != undefined && $scope.b != undefined) {
            $location.url("/product");
        }
        else {
            alert("you have been logined")

        }
    }
    $scope.imgs=function () {
        $location.url("/imagef");
    }
    $scope.delee=function delee() {
        $(".imggg").remove();
    }

});

// var app = angular.module("myfirst", ["ngRoute"]);
// app.config(["$routeProvider",function ($routeProvider,$locationProvider) {
//     $routeProvider.
//     when("/product",{
//         "templateUrl":"product.html"
//     }).
//     when("/forgotpwd",{
//         "templateUrl":"forgotpwd.html"
//     }).
//     otherwise({
//         "templateUrl":"login.html"
//     })
// }])
// $locationProvider.html5Mode(true);
// app.controller("myFirst", function($scope,$location) {
//     $scope.showProductpage=function () {
//         $location.url("/product");
//     }
//     $scope.showpage=function () {
//         $location.url("/home");
//     }
//     $scope.showForgotpwd=function () {
//         $location.url("/forgotpwd")
//
//     }
// })





    //
    //
    // var app = angular.module("myfirst", ['ui.router']);
    //     app.config(function ($stateProvider,$urlRouterProvider) {
    //         $urlRouterProvider.otherwise("/login");
    //             $stateProvider
    //                     .state("product",{
    //                      url:"/product",
    //                      "templateUrl":"product.html"
    //           })
    //                     .state("forgotpwd",{
    //                      url:"/forgotpwd",
    //                     "templateUrl":"forgotpwd.html"
    //             })
    //                      .state("login",{
    //                       url:"/login",
    //                       "templateUrl":"login.html"
    //             })
    //         });
    //         app.controller("myFirst", function($scope,$location) {
    //         $scope.showProductpage=function () {
    //             $location.url("/product");
    //         };
    //         $scope.showForgotpwd=function () {
    //             $location.url("/forgotpwd")
    //
    //         }
    //         });
    //
    //
    //








//click function
// var app = angular.module("myfirst", []);
// app.controller("myFirst", function($scope) {
//     $scope.firstName = "manoj";
//     $scope.lastName = "hari";
//     $scope.changename=function(){
//         $scope.firstName="hari";
//         $scope.lastName="manju"
//         $scope.changeName=function(){
//             $scope.firstName="patels"
//             $scope.lastName="manoj";
//         }
//     }
// });


// var app = angular.module('myfirst', []);
// app.controller('myFirst', function($scope, $interval) {
//     $scope.date=new Date().toLocaleTimeString();
//     $interval(function () {
//         $scope.date=new Date().toLocaleTimeString();
//
//     },1000);
//
// });


// ANGULAR API
// var app = angular.module('myfirst', []);
// app.controller('myFirst', function($scope) {
//     $scope.a="MANOJ"
//     $scope.b=angular.lowercase($scope.a);
//     // $scope.b=angular.uppercase($scope.a);
//     // $scope.b=angular.isString($scope.a);
//     // $scope.b=angular.isNumber($scope.a);
//
// })


// var app = angular.module('myfirst', []);
// app.controller('myFirst', function($scope, $http) {
//     $http.get("ajs.htm")
//         .then(function (response) {
//             $scope.names=response.data.records;
//
//         })
// })



// var app = angular.module("myfirst", [
//     'ngRoute',
//     ]);
// app.config(["$routeProvider",function ($routeProvider) {
//     $routeProvider.
//     when("/product",{
//         "templateUrl":"product.html",
//         "caseInsensitiveMatch":true
//     }).
//     when("/forgotpwd",{
//         "templateUrl":"forgotpwd.html",
//         "caseInsensitiveMatch":true
//     }).
//     when("/Manoj",{
//         "templateUrl":"https://harimanoj1993.wixsite.com/manojhari"
//     }).
//     when("/imagef",{
//         "templateUrl":"imagef.html"
//     }).
//     otherwise({
//         "templateUrl":"login.html",
//         "caseInsensitiveMatch":true
//     })
// }])



// var app = angular.module("myfirst", []);
// app.controller("myFirst", function($scope) {
//     $scope.a=1;
//     $scope.b=3;
// })