/**
 * Created by thienbui on 03-Oct-16.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        this.categories = categories;
    }

})();
