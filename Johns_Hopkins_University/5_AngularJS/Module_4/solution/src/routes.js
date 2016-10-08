(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'src/templates/home.template.html'
		})
		.state('categories',{
			url: '/categories',
			templateUrl: 'src/templates/categories.template.html',
			controller: 'CategoriesCtrl as categoriesCtrl',
			resolve: {
				categories: ['MenuDataService', function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
		})
		.state('items',{
			url: '/items/{shortName}',
			templateUrl: 'src/templates/items.template.html',
			controller: 'ItemController as itemCtrl',
			resolve: {
				menuItems: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
					return MenuDataService
							.getItemsForCategoriy($stateParams.shortName)
			   			  	.then(function(results){
			   			  		return results;
							});
				}]
			}
		});



		// .state('categories',{
		// 	url: '/categories',
		// 	templateUrl: 'src/templates/categories.template.html',
		// 	controller: 'CategoriesCtrl as categoriesCtrl'
		// })
		// .state('itemDetail',{
		// 	url: '/itemDetail/{shortName}',
		// 	templateUrl: '/src/templates/item.template.html',
		// 	controller: 'ItemController as itemCtrl'
		// });
	}
})();