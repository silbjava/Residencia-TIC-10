const form = require("prompt-sync")
const entrada = form()
const as = require('fs')

console.log('MENU DE GERENCIAMENTO DE DADOS.')
console.log('Selecione uma das opções abaixo:')
console.log(`${1} - Listar Cadastrados.`)
console.log(`${2} - Adicionar Usuário`)
console.log(`${3} - Alterar Usuário`)
console.log(`${4} - Localizar Usuário.`)
console.log(`${5} - Remover Usuário`)
console.log(`${6} - Sair`)

while(true){
    let opcao = entrada()
    if(opcao == 1||opcao==2||opcao==3||opcao==4||opcao==5||opcao==6){
        exports.op = opcao
    }else{
        console.log('Opção Invalida! - Digite uma das opção anteriores.')
    }

    module.exports = opcao
if(opcao == 6){
    console.clear()
    break
}
}
