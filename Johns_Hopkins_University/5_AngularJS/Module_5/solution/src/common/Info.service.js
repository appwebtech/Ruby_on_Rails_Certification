/*  Johns Hopkins University
      Whiting School of Engineering
      Department of Computer Science
      Ruby on Rails Development.
      https://ep.jhu.edu/programs-and-courses/coursera
      Platform: Coursera
      Instructor: Yaakov Chaikin
      Student:    Joseph M Mwania
*/
(function () {
    "use strict";

    angular.module('common')
        .service('InfoService', InfoService);

    function InfoService() {
        var service = this;
        service.addInfo = function (subscriber) {
            console.log(subscriber);
            service.info = subscriber;
        };
        service.getInfo = function () {
            return service.info;
        }
    }

})();
