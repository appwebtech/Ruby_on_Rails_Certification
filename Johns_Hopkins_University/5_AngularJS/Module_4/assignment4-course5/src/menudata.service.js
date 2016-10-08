/**
 * Created by thienbui on 03-Oct-16.
 */
(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {

        this.getAllCategories = function () {
            return $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data;
                return foundItems;
            });
        };
        this.getItemsForCategory = function (categoryShortName) {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json', {params: {category: categoryShortName}}).then(function (result) {
                var foundItems = result.data.menu_items;
                return foundItems;
            });
        };
    }

})();
