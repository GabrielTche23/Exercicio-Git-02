var nomes = []
var senhas = []
var continuar = true;
var contador = 0;
var opcao = 0;
var nomeLogin, senhaLogin
var loginValido = false
var nomeExcluir
var nomeAux = []
var senhaAux = []
while (continuar) {
    opcao = prompt("Digite 1 para Cadastrar 2 para Logar 3 para Encerrar e 4 para Excluir")
    if (opcao == 1) {
        while (continuarCadastro == 1) {
            nomes[contador] = prompt("Digite seu Nome: ")
            senhas[contador] = prompt("Digite sua Senha: ")
            contador++
            console.log(nomes)
            console.log(senhas)
            var continuarCadastro = prompt("Deseja cadastrar novamente? Se sim Digite 1 e 2 para encerrar.")
        }
        continuarCadastro = 1
    }
    else if (opcao == 2) {
        nomeLogin = prompt("Digite seu nome: ")
        senhaLogin = prompt("Digite sua senha: ")
        loginValido = false
        for (var index = 0; index < contador; index++) {
            if (nomeLogin == nomes[index] && senhaLogin == senhas[index]) {
                loginValido = true
                console.log("Login feito com sucesso.")
            }
            if (!loginValido) {
                console.log("Login invalido por favor verifique seu nome ou senha.")
            }
        }
    }
    else if (opcao == 3) {
        continuar = false
    }
    else if (opcao == 4) {
        nomeExcluir = prompt("Digite o nome do cadastro que deseja excluir.")
        for (var index = 0; index < contador; index++) {
            if (nomeExcluir == nomes[index]) {
                nomes[index] = 0;
                senhas[index] = 0;
                console.log("Cadastro Excluido.")
            }
        }
        for (var atual = 0; atual < contador - 1; atual++) {
            for (var seguinte = atual + 1; seguinte < atual; seguinte++) {
                if (nomes[atual] == 0) {
                    nomes[atual] = nomes[seguinte]
                    senhas[atual] = senhas[seguinte]
                    nomes[seguinte] = 0;
                    senhas[seguinte] = 0;
                }
            }
        }
        for (var index = 0; index < contador; index++) {
            if (nomes[index] != 0) {
                nomeAux[index] = nomes[index]
                senhaAux[index] = senhas[index]
            }
        }
        nomes = nomeAux
        senhas = senhaAux
        nomeAux = []
        senhaAux = []
        contador--
    }

}