(function(){
	angular.module('MenuApp')
	.component('items',{
		templateUrl: 'src/templates/item.template.html',
		bindings: {
			items: '<'
		}
	});
})();
