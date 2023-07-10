var app = angular.module('app', ['ngRoute'])
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/category/:sports', {
            templateUrl: 'category.html',
            controller: 'CategoryController'
        })
        .when('/category/:business', {
            templateUrl: 'category.html',
            controller: 'CategoryController'
        })
        .when('/category/:technology', {
            templateUrl: 'category.html',
            controller: 'CategoryController'
        })
        .when('/category/:health', {
            templateUrl: 'category.html',
            controller: 'CategoryController'
        })
        .when('/category/:entertainment', {
            templateUrl: 'category.html',
            controller: 'CategoryController'
        })
        .when('/category/:general', {
            templateUrl: 'category.html',
            controller: 'CategoryController'
        })
        .when('/category/:science', {
            templateUrl: 'category.html',
            controller: 'CategoryController'
        })
        .when('/country/:countryCode', {
            templateUrl: 'country.html',
            controller: 'CountryController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
