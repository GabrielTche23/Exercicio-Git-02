var nomes = []
var senhas = []
var continuar = 1;
var contador = 0;
while (continuar = 1){
    var continuarCadastro = prompt("Deseja cadastrar novamente? Se sim Digite 1 e 2 para encerrar.")
    nomes[contador] = prompt("Digite seu Nome: ")
    senhas[contador] = prompt("Digite sua Senha: ")
    contador++
    if(continuarCadastro == 2){
        continuar = 2
    } 
}