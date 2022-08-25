var nomes = []
var senhas = []
var continuar = 1;
var contador = 0;
var opcao = 0;
var nomeLogin, senhaLogin
var loginValido = false
while (continuar = 1){
    opcao = prompt("Digite 1 para Cadastrar 2 para Logar e 3 para Encerrar.")
    if (opcao == 1 ){
        nomes[contador] = prompt("Digite seu Nome: ")
        senhas[contador] = prompt("Digite sua Senha: ")
        contador++
    }
    else if(opçao == 2){
        nomeLogin = prompt("Digite seu nome: ")
        senhaLogin = prompt("Digite sua senha: ")
        loginValido = false
        for(var index = 0; index < contador; index++){
            if (nomeLogin == nomes[index] && senhaLogin == senhas[index]){
                loginValido = true
                console.log("Login feito com sucesso.")
            }
            if(!loginValido){
                console.log("Login invalido por favor verifique seu nome ou senha.")
            }
        }
    }
    else if(opcao == 3){
        continuar = 2
    }
    var continuarCadastro = prompt("Deseja cadastrar novamente? Se sim Digite 1 e 2 para encerrar.")

}