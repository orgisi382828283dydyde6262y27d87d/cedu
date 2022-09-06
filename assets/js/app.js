// Variables declaration
var app = angular.module("myApp", ["ngRoute"]);
var template_path = document.location.origin+'/templates/';

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : template_path+"main.html",
        controller: 'MainController'
    })
    .when("/auth", {
        templateUrl : template_path+"auth.html",
        controller: 'AuthController'
    })
    .when("/profile", {
        templateUrl : template_path+"profile.html",
        controller: 'ProfileController'
    });
});