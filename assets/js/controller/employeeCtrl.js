app.controller('EmployeeCtrl',[
                '$log', 
                'employeeSrvc',	
                '$mdDialog',							
    function EmployeeCtrl($log, employeeSrvc, $mdDialog){
        
        var vm = this;
        //employees array
        vm.employees = [];
        //
        vm.showHide = false;

        //default user object
        vm.user = {
            title: '',
            email: '',
            firstName: '',
            lastName: '',
            company: 'Web Business Systems ',            
            city: '',
            postalCode: ''
        };
        //get employeeS 
        employeeSrvc.list()
            .then(function(response){
                vm.employees = response.data;
            })
            .catch(function(response){
                $log.debug(response);
            });
        //show employee form
        vm.showNewEmployeeForm = function(){            
            vm.showHide = !vm.showHide;
        };
        //cancel employee form
        vm.cancelNewEmployee = function(){
            vm.showHide = !vm.showHide;
            vm.user = {
                title: '',
                email: '',
                firstName: '',
                lastName: '',
                company: 'Web Business Systems ',            
                city: '',
                postalCode: ''
            };
        };
        vm.addNewOrEditEmployee = function(obj){  
            //no id new record
            if(!obj.id){          
                employeeSrvc.post(obj)
                    .then(function(response){
                        vm.employees.push(response.data);
                        vm.showHide = !vm.showHide;
                    })
                    .catch(function(response){
                        $log.debug(response);
                    })
            }
            //id in obj, update existing record
            else{
                employeeSrvc.put(obj)
                    .then(function(response){
                        var index = _.findIndex(vm.employees, function(o){
                            return o.id === obj.id;
                        });
                        vm.employees[index] = response.data;
                        vm.showHide = !vm.showHide;
                    })
                    .catch(function(response){
                        $log.debug("Error: PUT" + JSON.stringify(response));
                    });
            }
            

        };
        vm.editSelectedRecord = function(obj){
            //set the date to be a date object
            obj.startDate = new Date(obj.startDate);
            vm.user = obj;
            vm.showHide = !vm.showHide;
        };
        //show confirmation dialog and delete selected record if user click YES
        vm.deleteConfirmation = function(ev, obj){
            var confirm = $mdDialog.confirm()
                .title('Delete selected!')
                .textContent('You are about to delete employee record for ' + obj.firstName.toUpperCase() + ' ' + obj.lastName.toUpperCase() + '. Are you sure ?')
                .ariaLabel('')
                .targetEvent(ev)
                .ok('YES')
                .cancel('NO');

            $mdDialog.show(confirm).then(function() {
                //delete selected record
                employeeSrvc.delete(obj.id)
                .then(function(response){
                    var index = _.findIndex(vm.employees, function(o){
                        return o.id === obj.id;
                    });
                    vm.employees.splice(index, 1);                    
                })
                .catch(function(response){
                    $log.debug("Error: DELETE/+id" + JSON.stringify(response));
                });
            }, function() {
                //do nothing, close the dialog
            });
        };
    }
]);