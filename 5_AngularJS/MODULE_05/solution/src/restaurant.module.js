/*  Johns Hopkins University
      Whiting School of Engineering
      Department of Computer Science
      Ruby on Rails Development.
      https://ep.jhu.edu/programs-and-courses/coursera
      Platform: Coursera
      Instructor: Yaakov Chaikin
      Student:    Joseph M Mwania
*/
(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}

})();
