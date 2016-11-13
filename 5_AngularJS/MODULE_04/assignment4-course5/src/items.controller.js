/**
 * Created by thienbui on 03-Oct-16.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);


    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        this.items = items;
    }

})();
