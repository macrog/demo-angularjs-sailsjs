app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'partials/menu.html',
            controller: 'AppCtrl as app'
        })
        .state('app.home', {
            url: '/home',                       
            templateUrl: 'partials/home.html'
        })
        .state('app.employee', {
            url: '/employee',                       
            templateUrl: 'partials/employee.html',
            controller: 'EmployeeCtrl as emp' 
        })
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
  });