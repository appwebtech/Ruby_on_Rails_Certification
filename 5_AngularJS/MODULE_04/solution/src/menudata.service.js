(function(){
	angular.module('Data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$q', '$http'];
	function MenuDataService($q, $http) {
		var service = this;


		service.getAllCategories = function(){
			 return $http({
			 	method: 'GET',
			 	// url: 'https://davids-restaurant.herokuapp.com/categories.json'
			 	url: 'categories.json'
			 });
		}

		service.getItemsForCategoriy = function(categoryShortName){
			var itemUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category="
						  + categoryShortName;
			return $http({
				method: 'GET',
				url: itemUrl
			});
		}
	}
})();