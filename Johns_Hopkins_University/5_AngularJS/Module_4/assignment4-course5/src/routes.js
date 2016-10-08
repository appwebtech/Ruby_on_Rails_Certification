/**
 * Created by thienbui on 03-Oct-16.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'template/home.template.html'
            })

            // Premade categories page
            .state('categories', {
                url: '/categories',
                templateUrl: 'template/categories.template.html',
                controller: 'CategoriesController as ctgCtrl',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories().then(function (result) {
                            return result;
                        });
                    }]
                }
            })
            .state('items', {
                url: '/items/{shortName}',
                templateUrl: 'template/items.template.html',
                controller: 'ItemsController as iCtrl',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName).then(function (result) {
                            return result;
                        });
                    }]
                }
            });
    }

})();
