var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngMaterial', 'ngMessages', 'ngAnimate']);
//contol of logs and date  format for datepicker
app.config(function($logProvider, $mdDateLocaleProvider){
  	$logProvider.debugEnabled(true);

	$mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('DD-MM-YYYY');
    };
});

//define constant of URL
app.constant('config', { 
	url: "http://localhost:1337/" 
});
//define menu directive
app.directive('menuDrct', function () {
	return {
		restrict: 'E',
		templateUrl: 'partials/menuDrct.html'
	};
});