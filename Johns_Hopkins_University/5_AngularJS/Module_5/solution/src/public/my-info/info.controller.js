(function () {
    "use strict";

    angular.module('public')
        .controller('InfoController', InfoController);
    InfoController.$inject = ['InfoService'];
    function InfoController(InfoService) {
        var $ctrl = this;
        $ctrl.info = InfoService.getInfo();
        console.log($ctrl.info);
    }


})();
