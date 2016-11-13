(function(){
	angular.module('MenuApp')
	.controller('ItemController', ItemController);

	ItemController.$injec = ['MenuDataService', '$stateParams', 'menuItems'];
	function ItemController(MenuDataService, $stateParams, menuItems){
		var ctrl = this;
		ctrl.items = menuItems.data.menu_items;
	}
})();