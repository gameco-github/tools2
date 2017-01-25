angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('MostrarType', ['$http','$Global', function($http,$Global){
	return {
		mostrar : function(){
		return $http.post($Global.url+'/api/tipos');
		}
	}
}])

.factory('Empleado', ['$http','$Global', function($http, $Global){
	return {
		mostrar : function(){
		return $http.post($Global.url+'/api/empleado');
		}
	}
}])

.factory('Deudores', ['$http','$Global', function($http, $Global){
	return {
		mostrar : function(){
		return $http.post($Global.url+'/api/verDeudores');
		}
	}
}])

.factory('$Global', function() {
  return {
  	  url : 'http://gameco.dev',
      token : '',
      id : '',
      mis_gastos : ''
  }
})

.factory('$Variables', function() {
  return {
  	  fondo : '',
  	  deuda : ''
  }
})