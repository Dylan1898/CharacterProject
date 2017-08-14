var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/api/', {
            templateUrl: "/views/all.html"
        })
        .when('/api/Role/:role', {
            templateUrl: "/views/Role.html",
        })
        .when('/api/single/:id', {
            templateUrl: "/views/single.html"
        })

});
myApp.controller('allGetController', function ($scope, $http, $location, $routeParams, $route) {
    $http.get("http://localhost:3000/api/all/")
        .then(function (response) {
            $scope.allChars = response.data;
            console.log($scope.allChars)
        })
    $scope.goToSingle = function (id) {
        $http.get('/api/all/')
            .then(function () {
                $location.path('api/single/' + id)
                id = ($location.path('api/single/' + id))
            })
    }
    $scope.goToRole = function (Type) {
        $http.get('/api/all/')

            .then(function () {
                $location.path('api/Role/' + Type)
                Type = ($location.path('api/Role/' + Type))
                console.log(role)
                console.log($location.path)
            })
    }
});

myApp.controller('oneController', function ($scope, $routeParams, $http, $location) {
    var currentId = $routeParams.id;
    console.log($routeParams.id)
    $http.get("http://localhost:3000/api/single/" + currentId)
        .then(function (response) {
            $scope.thisChar = response.data;
            console.log(response.data)
        })
    $scope.goToRole = function (Type) {
        $http.get('/api/all/')

            .then(function () {
                $location.path('api/Role/' + Type)
                Type = ($location.path('api/Role/' + Type))
                console.log(role)
                console.log($location.path)
            })
    }
});
myApp.controller('allRoleController', function ($scope, $http, $location, $routeParams, $route) {
    var currentId = $routeParams.role;
    console.log($routeParams.role)
    $http.get("http://localhost:3000/api/Role/" + currentId)
        .then(function (response) {
            $scope.allRole = response.data;
            console.log($scope.allRole)
        })
    $scope.goToRole = function (role) {
        $http.get('/api/Role/' + role)
            .then(function () {
                $location.path('api/Role/' + role)
                id = ($location.path('api/Role/' + role))
            })
    }
    $scope.goToSingle = function (id) {
        $http.get('/api/all/')
            .then(function () {
                $location.path('api/single/' + id)
                id = ($location.path('api/single/' + id))
            })
    }

    function randomlinks() {
        var myrandom = Math.round(Math.random() * 21)

        console.log(myrandom)
        window.location = 'api/single/' + [myrandom]
    }
})
