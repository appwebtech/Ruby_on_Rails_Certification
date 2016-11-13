(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);
    SignupController.$inject = ['MenuService','InfoService'];
    function SignupController(MenuService,InfoService) {
        var $ctrl = this;
        $ctrl.subscriber = {};
        $ctrl.submit = function () {
            MenuService.getItem($ctrl.subscriber.short_name).then(function (response) {
                $ctrl.subscriber.favorite = response.data;
                InfoService.addInfo($ctrl.subscriber);
                $ctrl.error = false;
                $ctrl.success = true;
                return response.data;
            },function (response) {
                $ctrl.error = true;
                $ctrl.success = false;
            })
        }
    }


})();
