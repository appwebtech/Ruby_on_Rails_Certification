/*  Johns Hopkins University
		Whiting School of Engineering
		Department of Computer Science
		Ruby on Rails Development.
		https://ep.jhu.edu/programs-and-courses/coursera
		Platform: Coursera
		Instructor: Yaakov Chaikin
		Student:    Joseph M Mwania
*/
(function(){
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController ($scope){
		$scope.items = "";
		$scope.results = "";
		var outputstyle = {};
		var inputstyle = {};
		$scope.checkLunch = function(){
			if ($scope.items == "") {
				outputstyle = {
					"display": "inline-block",
					"color": "red",
				};
				inputstyle = {
						"border-color": "red",
				};
				$scope.results = "Please enter data first";
			}else{
				outputstyle = {
						"display": "inline-block",
						"color": "blue",
					};
				inputstyle = {
						"border-color": "blue",
				};

				var initialItems = $scope.items.split(',');
				var finalItmes = [];
				var j = 0;
				for (var i in initialItems){

					initialItems[i] = initialItems[i].trim();
					if (initialItems[i] != "") {
						finalItmes[j] = initialItems[i];
						j += 1;
					}
				}
				// console.log(initialItems);
				console.log(finalItmes);
				if ( finalItmes.length > 3) {
					$scope.results = "Too much!";
				}else{
					$scope.results = "Enjoy!";
				}
			}

			$scope.outputstyle = outputstyle;
			$scope.inputstyle = inputstyle;
			return $scope.results;
		};
	};
})();