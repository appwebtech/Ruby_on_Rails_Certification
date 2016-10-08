/**
 * Created by thienbui on 03-Oct-16.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'template/categories.component.html',
            bindings: {
                categoriesList: '<'
            }
        });

})();
