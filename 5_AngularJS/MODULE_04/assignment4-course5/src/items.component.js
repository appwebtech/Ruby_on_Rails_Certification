/**
 * Created by thienbui on 03-Oct-16.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'template/items.component.html',
            bindings: {
                itemsInCategory: '<'
            }
        });

})();
