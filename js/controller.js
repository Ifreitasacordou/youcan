const app = angular.module('projeto', []);

// =========================== controller cadastro.html =======================

app.controller('cadastroController',($scope, $http) =>{
    $scope.cadastro = (nome, senha, email) => {

        $scope.teste = "teste";
		
		$http({
			url: 'http://localhost:3000/api/usuarios/usuario',
			method: "POST",
			data: { 'nome' : nome,
                    'senha' : senha,
                    'email' : email
				 }
			})
			.then(function(response) {
			alert('Cadastro efetuado com sucesso');
			});

}});