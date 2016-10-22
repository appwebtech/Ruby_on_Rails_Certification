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

angular.module('common', [])
.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
