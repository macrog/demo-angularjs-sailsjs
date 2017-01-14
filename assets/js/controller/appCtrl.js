app.controller('AppCtrl', ['$scope', '$state', function AppCtrl($scope, $state){
	
	var vm = this;

	vm.goTo = function(string){
		switch (string.toLowerCase()) {
			case 'home':
				$state.go('app.home');
				break;
			case 'employee':
				$state.go('app.employee');
				break;
			case 'nhl':
				$state.go('app.nhl');
				break;
			default:
				break;
		}
	}	
}]);