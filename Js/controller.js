/**
 * Created by Manoj on 2/14/2017.
 */
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
        $location.url("/harimanoj1993.wixsite.com/manojhari");
    }
    $scope.imgs=function () {
        $location.url("/imagef");
    }
    $scope.delee=function delee() {
        $(".imggg").remove();
    }

});