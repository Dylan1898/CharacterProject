var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../views/home.html"
        })
        .when("/list", {
            templateUrl: "views/list.html",
        })
        .when("/single/:id", {
            templateUrl: "views/single.html"
        })
})
    console.log('yeh') 