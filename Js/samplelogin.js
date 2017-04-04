/**
 * Created by Manoj on 2/21/2017.
 */
var app = angular.module("myfirst", ['ui.router']);
    app.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("Home", {
                url: "/Home",
                "templateUrl": 'page1.html',
                controller:'myFirst'
            })
            .state("Employee",{
                url:"/Employee",
                "templateUrl": 'emplyeelist.html',
                controller:'myFirst'
            })
            .state("Employee.newemployee",{
            url:"/Employee/add",
            "templateUrl": 'newemployee.html',
                controller:'myFirst'
        })
            .state("Employee.editlist", {
                url: "/Employee/edit",
                "templateUrl": 'editlist.html',
                controller: 'myFirst'
            })
    })



app.controller("myFirst",function($scope,myservice) {


    $scope.employess=myservice.getlist;

        $scope.list=function () {
            var obj = {ID: $scope.x.linkss, NAME: $scope.x.namess, BIRTHDATE: $scope.x.birth, AGE: $scope.x.ages}

            // $scope.edits = function () {
            //     var obj = {ID: $scope.x.linkss, NAME: $scope.x.namess, BIRTHDATE: $scope.x.birth, AGE: $scope.x.ages}


                myservice.getobj($scope.employess, obj, function (result) {

                    $scope.employess = result;


                })
            }


            $scope.delete = function (id) {
                console.log("delete");
                myservice.dell($scope.employess, id, function (result) {
                    $scope.employess = result;
                })
            }
                $scope.edits = function (id) {
                    var y;
                    for(var i=0;i<$scope.employess.length;i++){
                        if($scope.employess[i].ID==id){
                            y=i;
                        }
                    }
                    $scope.a=$scope.employess[y].ID;
                    $scope.b=$scope.employess[y].NAME;
                    $scope.c=$scope.employess[y].BIRTHDATE;
                    $scope.d=$scope.employess[y].AGE;
                }

            $scope.edited=function () {
                for(var i=0;i<$scope.employess.length;i++){
                    if($scope.employess[i].ID==$scope.a) {
                            var y=i;


                    }
                    }
                $scope.employess[y].ID=$scope.a;
                $scope.employess[y].NAME=$scope.b;
                $scope.employess[y].BIRTHDATE=$scope.c;
                $scope.employess[y].AGE=$scope.d;
                }


})
