angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('MostrarType', ['$http', function($http){
	return {
		mostrar : function(){
		return $http.post('http://gamecotools.com.mx/api/tipos');
		}
	}
}])

.factory('GuardarGasto', ['$http', function($http){
	return {
		agregar :function(id,tipo,cantidad,token){
	       
           return $http.post("http://gameco.dev/api/gastos",{'id': id,'tipo': tipo,'cantidad': cantidad,'_token':token});
		}
	}
}])

.factory('Login', ['$http', function($http){
	return {	
		Entrar : function(email_app,contra){
	      
           return $http.post("http://gameco.dev.com.mx/api/auth_login",{'email': email_app,'password': contra});
          
		}

	}
}])
.factory('$Global', function() {
  return {
      token : '',
      id : ''
  }
})