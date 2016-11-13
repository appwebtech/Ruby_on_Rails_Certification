(function(){
	angular.module('Data')
	.controller('CategoriesCtrl', CategoriesCtrl);

	CategoriesCtrl.$inject = ['MenuDataService', 'categories'];
	function CategoriesCtrl(MenuDataService, categories){

		var ctrl = this;
		ctrl.categories = categories.data;
	}
})();