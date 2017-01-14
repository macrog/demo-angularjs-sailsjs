app.service('employeeSrvc', ['$http', '$q', 'config', function($http, $q, config) {
        var srvc = {
            list: function(){
                var deferred = $q.defer();
                $http.get(config.url + 'employee/')
                    .then(function(data){ 
                        deferred.resolve(data);
                    })
                    .catch(function(err){
                        deferred.reject(err);
                    })
                return deferred.promise;
            },
            post: function(obj){
                var deferred = $q.defer();
                delete obj.$$hashKey;
                delete obj.isEditing;
                var parameter = JSON.stringify(obj);                
                $http.post(config.url + 'employee/', parameter)
                    .then(function(data){ 
                        deferred.resolve(data);
                    })
                    .catch(function(err){
                        deferred.reject(err);
                    })
                return deferred.promise;
            },            
            put: function(obj){
                var deferred = $q.defer();
                delete obj.$$hashKey;
                delete obj.isEditing;
                var parameter = JSON.stringify(obj);                
                $http.put(config.url + 'employee/' + obj.id, parameter)
                    .then(function(data){ 
                        deferred.resolve(data);
                    })
                    .catch(function(err){
                        deferred.reject(err);
                    })
                return deferred.promise;
            },
            get: function(id){
                var deferred = $q.defer();                
                $http.get(config.url + 'employee/' + id)
                    .then(function(data){ 
                        deferred.resolve(data);
                    })
                    .catch(function(err){
                        deferred.reject(err);
                    })
                return deferred.promise;
            },            
            delete: function(id){
                var deferred = $q.defer();                
                $http.delete(config.url + 'employee/' + id)
                    .then(function(data){ 
                        deferred.resolve(data);
                    })
                    .catch(function(err){
                        deferred.reject(err);
                    })
                return deferred.promise;
            },
            getCols: function(){
                var deferred = $q.defer();             
                $http.get('js/services/cols.json')
                    .then(function(data){ 
                        deferred.resolve(data);
                    })
                    .catch(function(err){
                        deferred.reject(err);
                    })
                return deferred.promise; 
            }                      
        };
        
        return srvc;
    }
]);		
